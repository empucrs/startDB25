package com.example.ex02_nasaapi.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.ex02_nasaapi.Model.NasaModel;

@Service
public class NasaService {

    private final WebClient webClient;

    @Value("${nasa.api.key}")
    private String minhaChavinha;

    public NasaService(WebClient webClient) {
        this.webClient = webClient;
    }

    public String getAPOD() {
        System.out.println("Acessando o serviço apod");
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/planetary/apod")
                        .queryParam("api_key", minhaChavinha)
                        .build())
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    public NasaModel getApodObj() {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/planetary/apod")
                        .queryParam("api_key", minhaChavinha)
                        .build())
                .retrieve()
                .bodyToMono(NasaModel.class)
                .block();
    }

    public List<NasaModel> getApodListObj(int count) {
        List<NasaModel> lista = webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/planetary/apod")
                        .queryParam("api_key", minhaChavinha)
                        .queryParam("count", count)
                        .build())
                .retrieve()
                .bodyToFlux(NasaModel.class)
                .collectList()
                .block();
        return lista;
    }

    public List<NasaModel> getApodListObj(int ano, int mes, int dia) {

        String start_date = String.format("%04d-%02d-%02d", ano, mes, dia);
        
        List<NasaModel> lista = webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/planetary/apod")
                        .queryParam("api_key", minhaChavinha)
                        .queryParam("start_date", start_date)
                        .build())
                .retrieve()
                .bodyToFlux(NasaModel.class)
                .collectList()
                .block();
        return lista;    }
    
}
