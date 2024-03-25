package kr.board.springmvc01.repository;

import kr.board.springmvc01.entity.Board;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface BoardRepository {

    List<Board> findAll();

    void save(Board board);

    Board findByIdx(int idx);

    void deleteByIdx(int num);

    @Update("update myboard set title= #{title}, content=#{content} where idx=#{idx}")
    void edit(Board board);

//    @Update("update myboard set view_count = view_count+1 where idx=#{idx}")
    void addViewCount(int idx);
}
