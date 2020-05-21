package com.abc.movies.api;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

//@Component
public class SimpleCORSFilter implements Filter {

private final Logger log = LoggerFactory.getLogger(SimpleCORSFilter.class);

public SimpleCORSFilter() {
    log.info("SimpleCORSFilter init");
}

@Override
public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {

    HttpServletRequest request = (HttpServletRequest) req;
    HttpServletResponse response = (HttpServletResponse) res;
    ObjectMapper objectMapper = new ObjectMapper();
    Enumeration<String> headers = request.getHeaderNames();
    while(headers.hasMoreElements()) {
    	String header = headers.nextElement();
    	log.info(header + ": " + request.getHeader(header));		
    }
    
    
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Max-Age", "3600");
    response.setHeader("Access-Control-Allow-Headers", "*"); //Content-Type, Accept, X-Requested-With, "
    	//	+ "remember-me, access-control-allow-methods, access-control-allow-origin"

    chain.doFilter(req, res);
}

  @Override
  public void init(FilterConfig filterConfig) {}

  @Override
  public void destroy() {}

}