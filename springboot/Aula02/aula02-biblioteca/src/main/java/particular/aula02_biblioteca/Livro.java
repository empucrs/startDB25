package particular.aula02_biblioteca;

public class Livro {

    private int id;
    private String titulo;
    private int anoDePublicacao;

    public Livro(int id, String titulo, int anoDePublicacao) {
        this.id = id;
        this.titulo = titulo;
        this.anoDePublicacao = anoDePublicacao;
    }

    public int getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public int getAnoDePublicacao() {
        return anoDePublicacao;
    }

    @Override
    public String toString() {
        return "Livro [id=" + id + ", titulo=" + titulo + ", anoDePublicacao=" + anoDePublicacao + "]";
    }
}
