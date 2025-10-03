package com.padel.social.padelbackend.model;

import java.time.LocalDateTime;

public class Match {
    private Long id;
    private LocalDateTime fecha;
    private String lugar;
    private Integer maxJugadores;

    public Match() {}

    public Match(Long id, LocalDateTime fecha, String lugar, Integer maxJugadores) {
        this.id = id;
        this.fecha = fecha;
        this.lugar = lugar;
        this.maxJugadores = maxJugadores;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LocalDateTime getFecha() { return fecha; }
    public void setFecha(LocalDateTime fecha) { this.fecha = fecha; }

    public String getLugar() { return lugar; }
    public void setLugar(String lugar) { this.lugar = lugar; }

    public Integer getMaxJugadores() { return maxJugadores; }
    public void setMaxJugadores(Integer maxJugadores) { this.maxJugadores = maxJugadores; }
}
