package kr.board.springmvc01.controller;

import kr.board.springmvc01.entity.Board;
import kr.board.springmvc01.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/")
public class BoardController {
    @Autowired
    BoardService service;

    @GetMapping
    public String main() {
        return "main";
    }

    @RequestMapping("api/list")
    @ResponseBody
    public List<Board> list() {
        List<Board> list = service.getList();
        return list;
    }

    @RequestMapping("boardInsert")
    @ResponseBody // 단순 게시글을 DB에 저장하기 위한 용도의 메서드라 리턴할 Json형식의 데이터가 없기떄문에 생략해도됨
    public void boardInsert(Board board) {
        service.saveWrite(board);
    }
}
