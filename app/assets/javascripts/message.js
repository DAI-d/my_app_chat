$(function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var image = message.image ? `<img src= ${ message.image }>` : "";
    var user_image = message.user_image ? `<img src= ${ message.user_image }>` : "";
    var html = `<div class="message-box" data-message-id="${message.id}">
                  <div class="message-box__left">
                    <div class="message-box__left__user-image">
                      <div class="message__user-image">
                        ${user_image}
                      </div>
                    </div>
                      <div class="message-box__left__user-name">
                        ${message.user_name}
                      </div>
                    </div>
                  <div class="message-box__right">
                    <div class="message-box__right__message">
                      <div class="message__content">
                        ${content}
                      </div>
                      <div class="lower-message__image">
                        ${image}
                      </div>
                      <div class="message-box__right__date">
                        ${message.date}
                      </div>
                    </div>
                  </div>
                </div>`
  return html;
  }

  function scrollBottom(){
    var target = $('.message').last();
    var position = target.offset().top + $('.messages').scrollTop();
    $('.messages').animate({
      scrollTop: position
    }, 50, 'swing');
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('form')[0].reset();
      scrollBottom();
    })
    .fail(function(){
      alert('メッセージを入力してください！');
    })
    return false;
  });
});