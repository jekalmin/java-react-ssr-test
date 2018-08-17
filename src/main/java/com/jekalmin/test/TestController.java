package com.jekalmin.test;


import com.eclipsesource.v8.V8;
import com.eclipsesource.v8.V8Object;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.script.ScriptException;

@Controller
public class TestController {

    @GetMapping("/test")
    public ModelAndView test() throws ScriptException, JsonProcessingException {
        ModelAndView modelAndView = new ModelAndView("index");
        modelAndView.addObject("foo", "bar");
        return modelAndView;
    }
}
