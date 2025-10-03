package com.padel.social.padelbackend.controller;

import com.padel.social.padelbackend.model.Player;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class PlayerController {

    // Mock de jugadores
    private final List<Player> jugadores = Arrays.asList(
            new Player(1L, "Nahuel Sanz", 28, "Intermedio", 120, "Buenos Aires", 120, 100, 1500, 80, null),
            new Player(2L, "Juan Pérez", 32, "Avanzado", 50, "Córdoba", 200, 50, 2500, 95, null),
            new Player(3L, "María López", 25, "Principiante", 400, "Rosario", 30, 70, 500, 60, null)
    );

    @GetMapping("/players")
    public List<Player> getPlayers() {
        return jugadores;
    }
}

