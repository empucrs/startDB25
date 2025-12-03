package com.example.ex01_jsonplaceholder.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.ex01_jsonplaceholder.Model.PostModel;

@Service
public class JsonPlaceHolderService {

    @Autowired
    private WebClient webClient;

    public String getPostUnico() {
        return  webClient.get()
                    .uri("/posts/2")
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

    }
    
    public String getPostUnico(int id) {
        return  webClient.get()
                    .uri("/posts/{id}", id)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
    }

    public PostModel getPostModel(int id) {
        return  webClient.get()
                    .uri("/posts/{id}", id)
                    .retrieve()
                    .bodyToMono(PostModel.class)
                    .block();
    }

    public List<PostModel> getAllPosts() {
        return  webClient.get()
                    .uri("/posts")
                    .retrieve()
                    .bodyToFlux(PostModel.class)
                    .collectList()
                    .block();        
    }

    public List<PostModel> getAllPosts(int id) {
        List<PostModel> allPosts =  getAllPosts();
        System.out.println(allPosts.size()  + " posts encontrados.");
        List<PostModel> filteredPosts = allPosts.stream()
                       .filter(post -> post.getUserId() == id)
                       .limit(3)
                       .toList();
        System.out.println(filteredPosts.size()  + " posts entregues.");
        return filteredPosts;
    }
    
}
