package com.turing.api.team.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.turing.api.team.model.Team;
import com.turing.api.team.repository.TeamRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService{

    private final TeamRepository repository;

    @Override
    public List<Team> sql1() {
      //  return repository.sql1();
      return null;
    }
    
    @Override
    public List<Team> sql10() {
        String position = "GK";
        String regionName1 = "수원";
        String regionName2 = "대전";
      //  return repository.sql10(position, regionName1, regionName2);
      return null;
    }

    @Override
    public List<Team> sql12() {
        String regionName1 = "수원";
        String regionName2 = "대전";
      //  return repository.sql12(regionName1,regionName2);
      return null;
    }

    @Override
    public List<Team> sql13() {
      //  return repository.sql13();
      return null;
    }

    public List<Team> sql19() {
        String regionName = "인천";
      //  return repository.sql19(regionName);
      return null;
    }

    @Override
    public List<Team> sql20() {
        String position = "MF";
      //  return repository.sql20(position);
      return null;
    }

    @Override
    public List<Team> sql21() {
        String position = "MF";
      //  return repository.sql21();
      return null;
    }

}
