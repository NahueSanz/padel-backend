package com.padel.social.padelbackend.mock;

import com.padel.social.padelbackend.model.Match;
import com.padel.social.padelbackend.model.Player;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {

    private final List<Player> mockPlayers = List.of(
        new Player(
            1L, "Nahuel", 27, "Intermedio", 5, "Buenos Aires",
            120, 15,
            10, 6, // partidosJugados y partidosGanados
            List.of(new Match(1L, LocalDateTime.now().plusDays(2), "Club Palermo", 4))
        ),
        new Player(
            2L, "María", 24, "Avanzado", 2, "Córdoba",
            200, 22,
            15, 12, // partidosJugados y partidosGanados
            List.of(new Match(2L, LocalDateTime.now().plusDays(1), "Club Córdoba", 4))
        )
    );

    public List<Player> getAllPlayers() {
        return mockPlayers;
    }

    public Optional<Player> getPlayerById(Long id) {
        return mockPlayers.stream().filter(p -> p.getId().equals(id)).findFirst();
    }
}

