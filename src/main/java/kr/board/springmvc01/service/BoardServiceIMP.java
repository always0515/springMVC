package kr.board.springmvc01.service;

import kr.board.springmvc01.entity.Board;
import kr.board.springmvc01.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BoardServiceIMP implements BoardService{

    @Autowired
    BoardRepository repository;
    @Override
    public List<Board> getList() {

        return repository.findAll();
    }

    @Override
    public void saveWrite(Board board) {
        repository.save(board);
    }

    @Override
    public Board getByIdx(int idx) {
        return repository.findByIdx(idx);
    }

    @Override
    public void delete(int num) {
        repository.deleteByIdx(num);
    }

    @Override
    public void update(Board board) {
        repository.edit(board);
    }

    @Override
    public void addViewCount(int idx) {
        repository.addViewCount(idx);
    }


}
