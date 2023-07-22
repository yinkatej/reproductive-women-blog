package com.healthcaredelivery.healthcareblog.service;

import com.healthcaredelivery.healthcareblog.entity.Email;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService{
    @Autowired
    private JavaMailSender javaMailSender;
    @Value("yinkatej") private String sender;
    @Override
    public String sendSimpleMail(String toEmail, String subject, String body) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try{
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setFrom(sender);
            mimeMessageHelper.setTo(toEmail);
            mimeMessage.setSubject(subject);
            mimeMessage.setText(body);

            javaMailSender.send(mimeMessage);

        }catch (Exception e){

        }
        return "Mail sent successfully";

    }

    @Override
    public String sendEmailWithAttachment(Email email) {
        return null;
    }
}
