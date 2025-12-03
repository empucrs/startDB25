package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.example.demo.Service.GreetingService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class GreetingController {

    @Autowired
    private GreetingService service;

    @RequestMapping("/greeting")
    public @ResponseBody String requestMethodName() {
        return service.getGreetingMessage();
    }
    
}
