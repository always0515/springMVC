package kr.board.springmvc01.service;

import kr.board.springmvc01.entity.Board;

import java.util.List;

public interface BoardService {

    public List<Board> getList();

    public void saveWrite(Board board);

    Board getByIdx(int idx);

    void delete(int num);

    void update(Board board);

    void addViewCount(int idx);
}
