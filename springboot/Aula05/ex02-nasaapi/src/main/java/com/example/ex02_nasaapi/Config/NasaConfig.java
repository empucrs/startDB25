package com.example.ex02_nasaapi.Config;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class NasaConfig {

    @Value("${nasa.api.baseurl}")
    private String baseurl;

    @Bean
    public WebClient createWebClient() {
        System.out.println(baseurl+" <-- URL base de acesso");
        return WebClient.builder()
                .baseUrl(baseurl)
                .build();
    }

    
}