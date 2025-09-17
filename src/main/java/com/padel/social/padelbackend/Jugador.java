package com.padel.social.padelbackend;

public class Jugador {
    private String nombre;
    private int ranking;

    public Jugador() {}

    public Jugador(String nombre, int ranking) {
        this.nombre = nombre;
        this.ranking = ranking;
    }

    // Getters y setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }
}
