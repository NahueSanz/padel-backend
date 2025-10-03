package com.padel.social.padelbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class JugadorController {

    @GetMapping("/jugadores")
    public List<Jugador> listarJugadores() {
        return List.of(
            new Jugador("Nahuel", 1200),
            new Jugador("Marcos", 1100)
        );
    }
}
