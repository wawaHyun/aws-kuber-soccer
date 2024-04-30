package com.turing.api.team.service;

import java.util.List;

import com.turing.api.stadium.model.Stadium;
import com.turing.api.team.model.Team;
import com.turing.api.team.model.teamDto;

public interface TeamService {

default Team dtoToEntity(teamDto dto,Stadium stadium){
    return Team.builder()
    .teamId(dto.getTeamId())
    .regionName(dto.getRegionName())
    .teamName(dto.getTeamName())
    .eTeamName(dto.getETeamName())
    .origYYYY(dto.getOrigYYYY())
    .zipCode1(dto.getZipCode1())
    .zipCode2(dto.getZipCode2())
    .address(dto.getAddress())
    .ddd(dto.getDdd())
    .tel(dto.getTel())
    .fax(dto.getFax())
    .homepage(dto.getHomepage())
    .owner(dto.getOwner())
    .stadiumId(stadium)
    .build();
}

default teamDto entityToDto(Team ent){
    return teamDto.builder()
    .id(ent.getId())
    .teamId(ent.getTeamId())
    .regionName(ent.getRegionName())
    .teamName(ent.getTeamName())
    .eTeamName(ent.getETeamName())
    .origYYYY(ent.getOrigYYYY())
    .zipCode1(ent.getZipCode1())
    .zipCode2(ent.getZipCode2())
    .address(ent.getAddress())
    .ddd(ent.getDdd())
    .tel(ent.getTel())
    .fax(ent.getFax())
    .homepage(ent.getHomepage())
    .owner(ent.getOwner())
    .modDate(String.valueOf(ent.getModDate()))
    .regDate(String.valueOf(ent.getRegDate()))
    .build();
}

List<Team> sql1();
List<Team> sql10();
List<Team> sql12();
List<Team> sql13();
List<Team> sql19();
List<Team> sql20();
List<Team> sql21();

}
