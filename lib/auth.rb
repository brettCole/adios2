require 'JWT'

class Auth

  def self.create_token(user_object)
    payload = { user: JSON.parse(user_object.tojson) } 
    token = JWT.encode(payload, 'adiosapp', 'HS256')
    decode_token(token)
  end

  def self.decode_token(token)
    decoded = JWT.decode(token, 'adiosapp', true, { algorithm: 'HS256' })
  end

end