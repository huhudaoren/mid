package com.hroa.mid.utils.lang;

import com.hroa.mid.hr.entity.Record;
import jxl.CellView;
import jxl.Workbook;
import jxl.format.Alignment;
import jxl.format.Colour;
import jxl.format.UnderlineStyle;
import jxl.format.VerticalAlignment;
import jxl.write.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.List;


public class ExcelExportUtil {



    public  String  setResponseInfo(HttpServletResponse response, HttpServletRequest request, List<Record> record) {
        // 创建工作表
        WritableWorkbook book = null;
        response.reset();
        response.setCharacterEncoding("UTF-8");// 设置字符集
        try {
            String path = this.getClass().getClassLoader().getResource("../..").getPath();
            File schoolFile = new File(path+"/pages");
            // 假如文件不存在,则创建
            if(!schoolFile.exists()){
                schoolFile.mkdirs();
            }
            book = Workbook.createWorkbook(new File(path+"/excel/"+"信息表.xls"));
            WritableSheet sheet = book.createSheet("下载信息表1", 0);
            //合并单元格
            sheet.mergeCells( 0 , 0 , 3 , 0 );
            //设置字体;
            WritableFont font1 = new WritableFont(WritableFont.ARIAL,14,WritableFont.BOLD,false, UnderlineStyle.NO_UNDERLINE, Colour.BLACK);
            WritableCellFormat cellFormat1 = new WritableCellFormat(font1);
            //设置背景颜色;
            /* cellFormat1.setBackground(Colour.BLUE_GREY);  */
            //设置边框;
            /*cellFormat1.setBorder(Border.ALL, BorderLineStyle.DASH_DOT);*/
            //设置自动换行;
            cellFormat1.setWrap(true);
            //设置文字居中对齐方式;
            cellFormat1.setAlignment(Alignment.CENTRE);
            //设置垂直居中;
            cellFormat1.setVerticalAlignment(VerticalAlignment.CENTRE);
            //信息表title
            sheet.addCell(new jxl.write.Label(0, 0, "信息",cellFormat1));
            //设置单元格高
            sheet.setRowView( 0 , 400 );
            sheet.addCell(new jxl.write.Label(0, 1, "名字"));
            //设置单元格宽度
            sheet.setColumnView( 0 , 20 );
            sheet.addCell(new jxl.write.Label(1, 1, "电话"));
            sheet.setColumnView( 1 , 20 );
//            sheet.addCell(new jxl.write.Label(2, 1, "年龄"));
//            sheet.setColumnView( 2 , 30 );
            //追加数据
            for (int i = 0; i < record.size(); i++) {
                //由于设置标题和title,列从0开始,行i+2;
                sheet.addCell(new jxl.write.Label(0, i+2, record.get(0).getUserName()));
                //身份证等需要设置文本格式,否则下载点击后会无法再次显示原来数据
                sheet.addCell(new jxl.write.Label(1, i+2, record.get(0).getPhone()));
//                //设置单元格文本样式
//                WritableCellFormat wcfF = new WritableCellFormat(NumberFormats.TEXT);
//                //定义一个列显示样式
//                CellView ddbh = new CellView();
//                ddbh.setFormat(wcfF);//把定义的单元格格式初始化进去
//                ddbh.setSize(20*265);//设置列宽度（不设置的话是0，不会显示）
//                sheet1.setColumnView(1, ddbh);//设置工作表中第n列的样式
//                sheet.addCell(new jxl.write.Label(2, i+2, "123"));
            }

            book.write();
            book.close();
        } catch (Exception e) {
            System.out.println("");
        }
        try {
            String filename = "信息表.xls";
            String mimeType = request.getServletContext().getMimeType(filename);
            //指明这是一个下载的respond
            response.setContentType(mimeType);

            response.setHeader("Content-Disposition",
                    "attachment;filename="+ URLEncoder.encode(filename, "UTF-8"));

            //创建输出流
            OutputStream out = response.getOutputStream();
            //关闭
            out.close();
            return null;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }finally {
            String path = this.getClass().getClassLoader().getResource("../..").getPath();
            File img = new File(path+"/excel/"+"信息表.xls");
            // 假如文件存在,则删除
            if(img.exists()){
                img.delete();
            }
        }

    }
}
