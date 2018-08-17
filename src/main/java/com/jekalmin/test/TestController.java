package com.jekalmin.test;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.script.ScriptException;

@Controller
public class TestController {

    @GetMapping("/test")
    public String test() throws ScriptException {
        return "index";
    }
}
