package particular.aula03_biblioteca.Service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import particular.aula03_biblioteca.Model.Livro;

@Service
public class Acervo {

    private List<Livro> listaDeLivros;

    public Acervo() {
        listaDeLivros = new ArrayList<>();
        
        listaDeLivros.add(new Livro(1, "O Senhor dos Anéis", 1954));
        listaDeLivros.add(new Livro(2, "1984", 1949));
        listaDeLivros.add(new Livro(3, "A Guerra dos Tronos", 1996));
    }

    public List<Livro> getListaDeLivros() {
        return listaDeLivros;
    }

    public Livro getUmLivroQualquer() {
        if (!listaDeLivros.isEmpty()) {
            return listaDeLivros.get(0);
        }
        return null;
    }

    public Livro getLivroById(int id) {
        for (Livro livro : listaDeLivros) {
            if (livro.getId() == id) {
                return livro;
            }
        }
        return null;
    }
    
    public List<Livro> getLivroByTitle(String title) {
        List<Livro> resultados = new ArrayList<>();
        for (Livro livro : listaDeLivros) {
            if (livro.getTitulo().equalsIgnoreCase(title)) {
                resultados.add(livro);
            }
        }
        return resultados;
    }

    public void adicionarLivro(Livro livro) {
        listaDeLivros.add(livro);
    }
}