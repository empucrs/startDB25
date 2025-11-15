package com.example.ex01_jsonplaceholder.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ex01_jsonplaceholder.Model.PostModel;
import com.example.ex01_jsonplaceholder.Service.JsonPlaceHolderService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/jph/api")
public class HomeController {

    private final JsonPlaceHolderService jsonPlaceHolderService;

    public HomeController(JsonPlaceHolderService jsonPlaceHolderService) {
        this.jsonPlaceHolderService = jsonPlaceHolderService;
    }


    @GetMapping("/postUnico")
    public String postUnico() {
        // resoveremos consumindo a api externa
        return jsonPlaceHolderService.getPostUnico();
    }

    @GetMapping("/postUnico/{id}")
    public String getMethodName(@PathVariable int id) {
        return jsonPlaceHolderService.getPostUnico(id);
    }    

    @GetMapping("/postObjeto/{id}")
    public PostModel postModel(@PathVariable int id) {
        return jsonPlaceHolderService.getPostModel(id);
    }

    @GetMapping("/posts")
    public List<PostModel> getAllPosts() {
        return jsonPlaceHolderService.getAllPosts();
    }
    
    @GetMapping("/posts/{id}")
    public List<PostModel> getAllPosts(@PathVariable int id) {
        return jsonPlaceHolderService.getAllPosts(id);
    }
    
}