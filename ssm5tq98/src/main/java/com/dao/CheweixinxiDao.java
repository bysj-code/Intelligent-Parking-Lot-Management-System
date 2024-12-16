package com.dao;

import com.entity.CheweixinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.CheweixinxiVO;
import com.entity.view.CheweixinxiView;


/**
 * 车位信息
 * 
 * @author 
 * @email 
 * @date 2022-03-20 23:09:01
 */
public interface CheweixinxiDao extends BaseMapper<CheweixinxiEntity> {
	
	List<CheweixinxiVO> selectListVO(@Param("ew") Wrapper<CheweixinxiEntity> wrapper);
	
	CheweixinxiVO selectVO(@Param("ew") Wrapper<CheweixinxiEntity> wrapper);
	
	List<CheweixinxiView> selectListView(@Param("ew") Wrapper<CheweixinxiEntity> wrapper);

	List<CheweixinxiView> selectListView(Pagination page,@Param("ew") Wrapper<CheweixinxiEntity> wrapper);
	
	CheweixinxiView selectView(@Param("ew") Wrapper<CheweixinxiEntity> wrapper);
	

}
