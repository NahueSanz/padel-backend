package com.padel.social.padelbackend.model;

import java.util.List;

public class Player {
    private Long id;
    private String nombre;
    private Integer edad;
    private String nivel;        // Ej: "Principiante", "Intermedio", "Avanzado"
    private Integer ranking;     // Posición en ranking
    private String ciudad;
    private Integer puntos;      // puntos acumulados
    private Integer reputation;  // reputación por likes recibidos
    private Integer partidosJugados;
    private Integer partidosGanados;
    private List<Match> matches; // lista de partidos jugados

    public Player() {}

    public Player(Long id, String nombre, Integer edad, String nivel, Integer ranking,
                  String ciudad, Integer puntos, Integer reputation,
                  Integer partidosJugados, Integer partidosGanados,
                  List<Match> matches) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = nivel;
        this.ranking = ranking;
        this.ciudad = ciudad;
        this.puntos = puntos;
        this.reputation = reputation;
        this.partidosJugados = partidosJugados;
        this.partidosGanados = partidosGanados;
        this.matches = matches;
    }

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public Integer getEdad() { return edad; }
    public void setEdad(Integer edad) { this.edad = edad; }

    public String getNivel() { return nivel; }
    public void setNivel(String nivel) { this.nivel = nivel; }

    public Integer getRanking() { return ranking; }
    public void setRanking(Integer ranking) { this.ranking = ranking; }

    public String getCiudad() { return ciudad; }
    public void setCiudad(String ciudad) { this.ciudad = ciudad; }

    public Integer getPuntos() { return puntos; }
    public void setPuntos(Integer puntos) { this.puntos = puntos; }

    public Integer getReputation() { return reputation; }
    public void setReputation(Integer reputation) { this.reputation = reputation; }

    public Integer getPartidosJugados() { return partidosJugados; }
    public void setPartidosJugados(Integer partidosJugados) { this.partidosJugados = partidosJugados; }

    public Integer getPartidosGanados() { return partidosGanados; }
    public void setPartidosGanados(Integer partidosGanados) { this.partidosGanados = partidosGanados; }

    public List<Match> getMatches() { return matches; }
    public void setMatches(List<Match> matches) { this.matches = matches; }
}
