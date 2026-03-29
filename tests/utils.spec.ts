/**
 * 核心工具函数测试
 * @description 测试项目中的核心工具函数
 */

import { describe, it, expect } from 'vitest'
import { 
  formatNumber as formatMuseumNumber,
  getProvinceEn,
  getMuseumTypeEn,
  generateMuseumRoute
} from '@/utils/museum'
import {
  scale,
  formatTime,
  formatDate,
  formatNumber
} from '@/utils/common'

describe('Museum 工具函数', () => {
  describe('formatNumber - 数字格式化（千位分隔符）', () => {
    it('应该正确添加千位分隔符', () => {
      expect(formatMuseumNumber(1000)).toBe('1,000')
      expect(formatMuseumNumber(10000)).toBe('10,000')
      expect(formatMuseumNumber(1860000)).toBe('1,860,000')
    })

    it('应该正确处理小数字', () => {
      expect(formatMuseumNumber(0)).toBe('0')
      expect(formatMuseumNumber(999)).toBe('999')
    })
  })

  describe('getProvinceEn - 获取省份英文名', () => {
    it('应该正确转换省份中文名为英文', () => {
      expect(getProvinceEn('北京')).toBe('beijing')
      expect(getProvinceEn('上海')).toBe('shanghai')
      expect(getProvinceEn('广东')).toBe('guangdong')
    })

    it('应该正确处理特殊省份名称', () => {
      expect(getProvinceEn('内蒙古')).toBe('inner-mongolia')
      expect(getProvinceEn('香港')).toBe('hong-kong')
      expect(getProvinceEn('澳门')).toBe('macau')
    })

    it('未知省份应该返回小写形式', () => {
      expect(getProvinceEn('未知省份')).toBe('未知省份')
    })
  })

  describe('getMuseumTypeEn - 获取博物馆类型英文名', () => {
    it('应该正确转换博物馆类型', () => {
      expect(getMuseumTypeEn('历史博物馆')).toBe('history')
      expect(getMuseumTypeEn('艺术博物馆')).toBe('art')
      expect(getMuseumTypeEn('科技博物馆')).toBe('science')
    })
  })

  describe('generateMuseumRoute - 生成博物馆路由', () => {
    it('应该生成正确的博物馆详情页路由', () => {
      expect(generateMuseumRoute('北京', 1)).toBe('/museum/beijing/1')
    })

    it('应该正确处理不同省份', () => {
      expect(generateMuseumRoute('上海', 3)).toBe('/museum/shanghai/3')
      expect(generateMuseumRoute('陕西', 5)).toBe('/museum/shaanxi/5')
    })
  })
})

describe('Common 工具函数', () => {
  describe('scale - 数值映射', () => {
    it('应该正确映射数值范围', () => {
      expect(scale(50, 0, 100, 0, 360)).toBe(180)
      expect(scale(0, 0, 100, 0, 360)).toBe(0)
      expect(scale(100, 0, 100, 0, 360)).toBe(360)
    })
  })

  describe('formatTime - 时间格式化', () => {
    it('应该格式化时间为 HH:MM:SS', () => {
      const date = new Date(2024, 0, 1, 14, 30, 45)
      expect(formatTime(date)).toBe('14 : 30 : 45')
    })

    it('应该补零单个数字', () => {
      const date = new Date(2024, 0, 1, 9, 5, 8)
      expect(formatTime(date)).toBe('09 : 05 : 08')
    })
  })

  describe('formatDate - 日期格式化', () => {
    it('应该格式化日期为 星期X, XXXX年X月X日', () => {
      const date = new Date(2024, 2, 15)
      expect(formatDate(date)).toContain('2024年')
    })
  })

  describe('formatNumber - 数字格式化（中文单位）', () => {
    it('应该格式化大数字为中文单位', () => {
      expect(formatNumber(150000000)).toContain('亿')
      expect(formatNumber(15000)).toContain('万')
    })

    it('应该格式化中小数字为千位分隔符', () => {
      expect(formatNumber(1234)).toContain('1,234')
    })
  })
})
