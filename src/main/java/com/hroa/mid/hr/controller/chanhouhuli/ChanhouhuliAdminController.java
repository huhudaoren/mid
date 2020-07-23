package com.hroa.mid.hr.controller.chanhouhuli;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hroa.mid.hr.entity.Chanhouhuli;
import com.hroa.mid.hr.entity.User;
import com.hroa.mid.hr.mapper.ChanhouhuliMapper;
import com.hroa.mid.hr.mapper.UserMapper;
import com.hroa.mid.utils.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;


@Controller
@RequestMapping(value = "wt/lansi/admin")
public class ChanhouhuliAdminController {


    @Autowired
    private UserMapper userMapper;
    @Autowired
    private ChanhouhuliMapper ChanhouhuliMapper;

    @RequestMapping(value = "login")
    public String login(User user, Model model){
        if(StringUtils.isNullBoolean(user.getPassword()) || StringUtils.isNullBoolean(user.getUserName())){
            model.addAttribute("msg","登陆失败,请输入账号密码");
            //验证账号
            return "chanhou/chanhouAdmin/login";
        }
        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(user);
        if(userMapper.selectList(wrapper).size() > 0){
            model.addAttribute("id","1");
            return "redirect:/wt/lansi/admin/index.html";
        }
        model.addAttribute("msg","登陆失败，账号或密码错误");
        //验证账号
        return "chanhou/chanhouAdmin/login";
    }

    @RequestMapping(value = "index.html")
    public String index(Model model){
        Chanhouhuli Chanhouhuli = new Chanhouhuli();


        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(Chanhouhuli);
        ((QueryWrapper) wrapper).orderByDesc("create_date");
        //获取数据
        model.addAttribute("recordList",ChanhouhuliMapper.selectList(wrapper));
        return "chanhou/chanhouAdmin/index";
    }


    @RequestMapping(value = "/chanhoupoi", method = RequestMethod.GET)
    public void downloadsExcelDown(HttpServletResponse response) throws IOException {
        Chanhouhuli Chanhouhuli = new Chanhouhuli();


        Wrapper wrapper = new QueryWrapper();
        ((QueryWrapper) wrapper).setEntity(Chanhouhuli);
        ((QueryWrapper) wrapper).orderByDesc("create_date");
        List<Chanhouhuli> bgmExcelDownloads = ChanhouhuliMapper.selectList(wrapper);
        System.out.printf("------------" + bgmExcelDownloads.toString());
        HSSFWorkbook wb = new HSSFWorkbook();

        HSSFSheet sheet = wb.createSheet("信息");

        HSSFRow row = null;

        row = sheet.createRow(0);//创建第一个单元格
        row.setHeight((short) (26.25 * 20));
        row.createCell(0).setCellValue("信息");//为第一行单元格设值

        /*为标题设计空间
         * firstRow从第1行开始
         * lastRow从第0行结束
         *
         *从第1个单元格开始
         * 从第3个单元格结束
         */
        CellRangeAddress rowRegion = new CellRangeAddress(0, 0, 0, 2);
        sheet.addMergedRegion(rowRegion);

      /*CellRangeAddress columnRegion = new CellRangeAddress(1,4,0,0);
      sheet.addMergedRegion(columnRegion);*/

        row = sheet.createRow(1);
        row.setHeight((short) (22.50 * 20));//设置行高

        row.createCell(0).setCellValue("日期");//为第三个单元格设值
        row.createCell(1).setCellValue("姓名");//为第二个单元格设值
        row.createCell(2).setCellValue("手机号");//为第三个单元格设值
        row.createCell(3).setCellValue("数据来源");//为第三个单元格设值
        row.createCell(4).setCellValue("地址");//为第三个单元格设值
        row.createCell(5).setCellValue("金额");//为第三个单元格设值
        //遍历所获取的数据
        for (int i = 0; i < bgmExcelDownloads.size(); i++) {
            row = sheet.createRow(i + 2);
            Chanhouhuli bgm = bgmExcelDownloads.get(i);

            row.createCell(0).setCellValue(bgm.getCreateDate().toString());
            row.createCell(1).setCellValue(bgm.getName());
            row.createCell(2).setCellValue(bgm.getPhone());
            row.createCell(3).setCellValue("1".equals(bgm.getIsPc())?"电脑":"手机");
            row.createCell(4).setCellValue(bgm.getProvice()+bgm.getCity());
            row.createCell(5).setCellValue(bgm.getMoney());
        }
        sheet.setDefaultRowHeight((short) (16.5 * 20));
        //列宽自适应
        for (int i = 0; i <= 13; i++) {
            sheet.autoSizeColumn(i);
        }
        response.setContentType("application/vnd.ms-excel;charset=utf-8");
        OutputStream os = response.getOutputStream();
        response.setHeader("Content-disposition", "attachment;filename=信息.xls");//默认Excel名称
        wb.write(os);
        os.flush();
        os.close();
    }
}
