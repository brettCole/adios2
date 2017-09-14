OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  # Google
  provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_SECRET'],
           :scope => ['name', 'first_name', 'picture', 'email']

  # Facebook
  provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET'],
           :scope => ['name', 'first_name', 'picture', 'email']

  # Homeaway
  provider :homeaway, ENV['HOMEAWAY_CLIENT_ID'], ENV['HOMEAWAY_CLIENT_SECRET']
end