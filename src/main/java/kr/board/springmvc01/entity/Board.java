package kr.board.springmvc01.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Board {

    private int idx;
    private String title; //번호
    private String content; //제목
    private String writer; //내용
    private String regDate; //작성자
    private int viewCount; //조회수
}
