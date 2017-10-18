class SearchesController < ApplicationController

  def homeaway_connect
    @resp = Faraday.post('https://ws.homeaway.com/oauth/token') do |req|
      encoded = Base64.strict_encode64("#{ENV['HOMEAWAY_CLIENT_ID']}:#{ENV['HOMEAWAY_CLIENT_SECRET']}")
      req.headers['Authorization'] = "Basic #{encoded}"
    end
    @token_hash = JSON.parse(@resp.body)
    homeaway_search
  end

  def homeaway_search
    @search = Faraday.get('https://ws.homeaway.com/public/search') do |req|
      req.headers['Authorization'] = "Bearer #{@token_hash['access_token']}"
    end
    @search_result = JSON.parse(@search.body)
  end

end
