package com.turing.api.team;

import lombok.RequiredArgsConstructor;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turing.api.team.model.Team;
import com.turing.api.team.service.TeamService;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@ApiResponses(value = {
    @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
    @ApiResponse(responseCode = "404", description = "Customer not found") })
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/team")
@Slf4j
public class TeamController {
    
    private final TeamService service;

    @GetMapping("/sql1")
    public ResponseEntity<List<Team>> sql1() {
        log.info("SQL 1 :");
        return ResponseEntity.ok(service.sql1());
    }

    @GetMapping("/sql10")
    public ResponseEntity<List<Team>> sql10() {
        log.info("SQL 1 :");
        return ResponseEntity.ok(service.sql1());
    }

    @GetMapping("/sql12")
    public ResponseEntity<List<Team>> sql12() {
        log.info("SQL 1 :");
        return ResponseEntity.ok(service.sql1());
    }

    @GetMapping("/sql13")
    public ResponseEntity<List<Team>> sql13() {
        log.info("SQL 1 :");
        return ResponseEntity.ok(service.sql1());
    }

    @GetMapping("/sql19")
    public ResponseEntity<List<Team>> sql19() {
        log.info("SQL 1 :");
        return ResponseEntity.ok(service.sql1());
    }

    @GetMapping("/sql20")
    public ResponseEntity<List<Team>> sql20() {
        log.info("SQL 1 :");
        return ResponseEntity.ok(service.sql1());
    }

    @GetMapping("/sql21")
    public ResponseEntity<List<Team>> sql21() {
        log.info("SQL 1 :");
        return ResponseEntity.ok(service.sql1());
    }




}
