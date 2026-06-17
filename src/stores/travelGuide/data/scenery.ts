import type { SceneryData } from '@/typesOfPages/travelGuide';
import { beijingData } from './scenery/beijing';
import { shanghaiData } from './scenery/shanghai';
import { tianjinData } from './scenery/tianjin';
import { chongqingData } from './scenery/chongqing';
import { hebeiData } from './scenery/hebei';
import { shanxiData } from './scenery/shanxi';
import { liaoningData } from './scenery/liaoning';
import { jilinData } from './scenery/jilin';
import { heilongjiangData } from './scenery/heilongjiang';
import { jiangsuData } from './scenery/jiangsu';
import { zhejiangData } from './scenery/zhejiang';
import { anhuiData } from './scenery/anhui';
import { fujianData } from './scenery/fujian';
import { jiangxiData } from './scenery/jiangxi';
import { shandongData } from './scenery/shandong';
import { henanData } from './scenery/henan';
import { hubeiData } from './scenery/hubei';
import { hunanData } from './scenery/hunan';
import { guangdongData } from './scenery/guangdong';
import { guangxiData } from './scenery/guangxi';
import { hainanData } from './scenery/hainan';
import { sichuanData } from './scenery/sichuan';
import { guizhouData } from './scenery/guizhou';
import { yunnanData } from './scenery/yunnan';
import { xizangData } from './scenery/xizang';
import { shaanxiData } from './scenery/shaanxi';
import { gansuData } from './scenery/gansu';
import { qinghaiData } from './scenery/qinghai';
import { ningxiaData } from './scenery/ningxia';
import { xinjiangData } from './scenery/xinjiang';
import { neimengguData } from './scenery/neimenggu';
import { taiwanData } from './scenery/taiwan';
import { hongkongData } from './scenery/hongkong';
import { macauData } from './scenery/macau';

export const sceneryData: Record<string, SceneryData> = {
  beijing: beijingData,
  shanghai: shanghaiData,
  tianjin: tianjinData,
  chongqing: chongqingData,
  hebei: hebeiData,
  shanxi: shanxiData,
  liaoning: liaoningData,
  jilin: jilinData,
  heilongjiang: heilongjiangData,
  jiangsu: jiangsuData,
  zhejiang: zhejiangData,
  anhui: anhuiData,
  fujian: fujianData,
  jiangxi: jiangxiData,
  shandong: shandongData,
  henan: henanData,
  hubei: hubeiData,
  hunan: hunanData,
  guangdong: guangdongData,
  guangxi: guangxiData,
  hainan: hainanData,
  sichuan: sichuanData,
  guizhou: guizhouData,
  yunnan: yunnanData,
  xizang: xizangData,
  shaanxi: shaanxiData,
  gansu: gansuData,
  qinghai: qinghaiData,
  ningxia: ningxiaData,
  xinjiang: xinjiangData,
  neimenggu: neimengguData,
  taiwan: taiwanData,
  hongkong: hongkongData,
  macau: macauData,
};

export default sceneryData;
