package com.example.livechat.controller;


import com.example.livechat.domain.ChatInput;
import com.example.livechat.domain.ChatOutput;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import javax.swing.text.html.HTML;

@Controller
public class ChatController {

    @MessageMapping("/new-message")
    @SendTo("/topics/Livechat-ms")
    public ChatOutput newMessage(ChatInput message){
        return new ChatOutput(HtmlUtils.htmlEscape(message.user() + ": " + message.message())); // htmlEscape serve para evitar que injetem algum código no sistema por meio do front

    }

}
