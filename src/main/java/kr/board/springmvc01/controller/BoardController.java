package kr.board.springmvc01.controller;

import kr.board.springmvc01.entity.Board;
import kr.board.springmvc01.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("board")
public class BoardController {

    @Autowired
    BoardService service;

    @GetMapping()
    public String list(Model model) {
        List<Board> list = service.getList();
        model.addAttribute("list", list);
        return "board/list";
    }

    @GetMapping("detail")
    public String detail(@RequestParam("idx") int idx, Model model) {
        Board board = service.getByIdx(idx);
        service.addViewCount(idx);
        model.addAttribute("board", board);

        return "board/detail";
    }

    @GetMapping("write")
    public String writeForm() {

        return "board/write";
    }

    @PostMapping("write")
    public String saveWrite(Board board) {
        service.saveWrite(board);

        return "redirect:/board";
    }

    @GetMapping("delete/{num}") //뒤에 idx(변수명)와 클라이언트에서 보내는 값이 안맞아도됨
    public String delete(@PathVariable int num) { //따로 담을 변수명 하지않을경우 생략도됨 @PathVariable("num") int num
            service.delete(num);
        return "redirect:/board";
    }

    @GetMapping("edit/{idx}")
    public String edit(@PathVariable("idx") int idx,Model model) {
        Board board = service.getByIdx(idx);
        model.addAttribute("board",board);
        return "/board/edit";
    }

    @PostMapping("update")
    public String saveEdit(@RequestParam("title") String title ,
                           @RequestParam("content") String content ,
                           Model model) {
        Board board = new Board().builder()
                .title(title)
                .content(content).build();
        service.update(board);
        System.out.println(board.getTitle());
        System.out.println(board.getContent());
        return "redirect:/board";
    }
}
