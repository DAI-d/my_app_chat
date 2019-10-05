json.content  @message.content
json.id  @message.id
json.user_name  @message.user.name
json.date  @message.created_at.strftime("%H:%M")
json.image  @message.image.url
json.user_image  @message.user.image.url