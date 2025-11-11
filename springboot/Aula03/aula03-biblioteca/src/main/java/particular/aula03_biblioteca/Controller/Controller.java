package particular.aula03_biblioteca.Controller;

import java.util.List;

import particular.aula03_biblioteca.Model.Livro;
import particular.aula03_biblioteca.Service.Acervo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/biblioteca")
public class Controller {

    @Autowired
    private Acervo acervo;

    @GetMapping
    public String ola() {
        return "Olá, Mundo maravilhoso!";
    }

    @GetMapping("/livros")
    public List<Livro> livros() {
        return acervo.getListaDeLivros();
    }

    @GetMapping("/livro/especifico")
    public Livro umLivroQualquer() {    
        return acervo.getUmLivroQualquer();        
    }

    @GetMapping("/nada")
    public void nada() {
        System.out.println("Executou o método nada que devolve nada");
    }

    @GetMapping("/valor")
    public double valor() {
        return 2.5;
    }

    @GetMapping("/livro/porId")
    public ResponseEntity<Livro> livroPorId(@RequestParam int id) {
        Livro aux = acervo.getLivroById(id);
        if(aux!=null){
            return ResponseEntity.ok(aux);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/livroContendo/{param}")
    public List<Livro> getMethodName(@PathVariable String param) {
        return acervo.getLivroByTitle(param);
    }

    @PostMapping("/livro/novo")
    public boolean postMethodName(@RequestBody Livro entity) {
        acervo.adicionarLivro(entity);
        return true;
    }    

}