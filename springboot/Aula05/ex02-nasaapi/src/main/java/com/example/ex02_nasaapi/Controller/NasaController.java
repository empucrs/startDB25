package com.example.ex02_nasaapi.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController;

import com.example.ex02_nasaapi.Model.NasaModel;
import com.example.ex02_nasaapi.Service.NasaService;


@RestController
@RequestMapping("/nasa/api")
public class NasaController {

    private final NasaService nasaService;

    public NasaController(NasaService nasaService) {
        this.nasaService = nasaService;
    }

    @GetMapping("/apod/str")
    public String getAPOD() {
        System.out.println("Controlador acessado");
        return nasaService.getAPOD();
    }

    @GetMapping("/apod/obj")
    public NasaModel getApodObj() {
        return nasaService.getApodObj();
    }
    
    @GetMapping("/apod/{count}")
    public List<NasaModel> getApodListObj(@PathVariable int count) {
        List<NasaModel> lista = nasaService.getApodListObj(count);
        return lista;
    }
    
    @GetMapping("/apod/date/{YYYY}-{MM}-{DD}")
    public List<NasaModel> getApodListObj(
            @PathVariable("YYYY") int ano, 
            @PathVariable("MM") int mes, 
            @PathVariable("DD") int dia) 
    {
        List<NasaModel> lista = nasaService.getApodListObj(ano, mes, dia);
        return lista;
    }
    
}
