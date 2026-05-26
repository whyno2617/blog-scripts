
(function(){
/* pantone-finder v4 */

var PANTONE_COLORS = [
  { code: "100 C", name: "Pantone 100", hex: "#F4ED7C" },
  { code: "101 C", name: "Pantone 101", hex: "#F4ED47" },
  { code: "102 C", name: "Pantone 102", hex: "#F9E814" },
  { code: "103 C", name: "Pantone 103", hex: "#C6AD0F" },
  { code: "104 C", name: "Pantone 104", hex: "#AD9800" },
  { code: "105 C", name: "Pantone 105", hex: "#897A12" },
  { code: "106 C", name: "Pantone 106", hex: "#F6E96B" },
  { code: "107 C", name: "Pantone 107", hex: "#F5E12A" },
  { code: "108 C", name: "Pantone 108", hex: "#F6D700" },
  { code: "109 C", name: "Pantone 109", hex: "#F9CC00" },
  { code: "110 C", name: "Pantone 110", hex: "#D4A900" },
  { code: "111 C", name: "Pantone 111", hex: "#B08F00" },
  { code: "112 C", name: "Pantone 112", hex: "#9E8000" },
  { code: "113 C", name: "Pantone 113", hex: "#FAD859" },
  { code: "114 C", name: "Pantone 114", hex: "#FAD139" },
  { code: "115 C", name: "Pantone 115", hex: "#FDC81B" },
  { code: "116 C", name: "Pantone 116", hex: "#FDBA00" },
  { code: "117 C", name: "Pantone 117", hex: "#D09A00" },
  { code: "118 C", name: "Pantone 118", hex: "#AE8200" },
  { code: "119 C", name: "Pantone 119", hex: "#8F6B00" },
  { code: "120 C", name: "Pantone 120", hex: "#FDD67C" },
  { code: "121 C", name: "Pantone 121", hex: "#FDD26A" },
  { code: "122 C", name: "Pantone 122", hex: "#FECB40" },
  { code: "123 C", name: "Pantone 123", hex: "#FFBF00" },
  { code: "124 C", name: "Pantone 124", hex: "#D09A00" },
  { code: "125 C", name: "Pantone 125", hex: "#A07800" },
  { code: "126 C", name: "Pantone 126", hex: "#8A6900" },
  { code: "127 C", name: "Pantone 127", hex: "#F5DC80" },
  { code: "128 C", name: "Pantone 128", hex: "#F5D55E" },
  { code: "129 C", name: "Pantone 129", hex: "#F5CC3B" },
  { code: "130 C", name: "Pantone 130", hex: "#F0A500" },
  { code: "131 C", name: "Pantone 131", hex: "#C88A00" },
  { code: "132 C", name: "Pantone 132", hex: "#9E6B00" },
  { code: "133 C", name: "Pantone 133", hex: "#7A5200" },
  { code: "134 C", name: "Pantone 134", hex: "#FAD88A" },
  { code: "135 C", name: "Pantone 135", hex: "#F7CC70" },
  { code: "136 C", name: "Pantone 136", hex: "#F7C051" },
  { code: "137 C", name: "Pantone 137", hex: "#F9A800" },
  { code: "138 C", name: "Pantone 138", hex: "#D18700" },
  { code: "139 C", name: "Pantone 139", hex: "#A36800" },
  { code: "140 C", name: "Pantone 140", hex: "#7A5000" },
  { code: "141 C", name: "Pantone 141", hex: "#F5CC81" },
  { code: "142 C", name: "Pantone 142", hex: "#F5BC5E" },
  { code: "143 C", name: "Pantone 143", hex: "#F5AE39" },
  { code: "144 C", name: "Pantone 144", hex: "#EF8B00" },
  { code: "145 C", name: "Pantone 145", hex: "#C47200" },
  { code: "146 C", name: "Pantone 146", hex: "#9E5C00" },
  { code: "147 C", name: "Pantone 147", hex: "#7A4900" },
  { code: "148 C", name: "Pantone 148", hex: "#FAD4A0" },
  { code: "149 C", name: "Pantone 149", hex: "#F7C180" },
  { code: "150 C", name: "Pantone 150", hex: "#F5A85A" },
  { code: "151 C", name: "Pantone 151", hex: "#F47920" },
  { code: "152 C", name: "Pantone 152", hex: "#D1620A" },
  { code: "153 C", name: "Pantone 153", hex: "#A34E00" },
  { code: "154 C", name: "Pantone 154", hex: "#7A3C00" },
  { code: "155 C", name: "Pantone 155", hex: "#F7D8B4" },
  { code: "156 C", name: "Pantone 156", hex: "#F5C293" },
  { code: "157 C", name: "Pantone 157", hex: "#F5A66D" },
  { code: "158 C", name: "Pantone 158", hex: "#F06B22" },
  { code: "159 C", name: "Pantone 159", hex: "#C05318" },
  { code: "160 C", name: "Pantone 160", hex: "#924014" },
  { code: "161 C", name: "Pantone 161", hex: "#612E10" },
  { code: "162 C", name: "Pantone 162", hex: "#FAC8A3" },
  { code: "163 C", name: "Pantone 163", hex: "#F9AB7A" },
  { code: "164 C", name: "Pantone 164", hex: "#F98A4A" },
  { code: "165 C", name: "Pantone 165", hex: "#F76F00" },
  { code: "166 C", name: "Pantone 166", hex: "#D4571A" },
  { code: "167 C", name: "Pantone 167", hex: "#A84018" },
  { code: "168 C", name: "Pantone 168", hex: "#7A2E14" },
  { code: "169 C", name: "Pantone 169", hex: "#FAAB97" },
  { code: "170 C", name: "Pantone 170", hex: "#F88A74" },
  { code: "171 C", name: "Pantone 171", hex: "#F7614A" },
  { code: "172 C", name: "Pantone 172", hex: "#F74723" },
  { code: "173 C", name: "Pantone 173", hex: "#C23B1A" },
  { code: "174 C", name: "Pantone 174", hex: "#8F2A14" },
  { code: "175 C", name: "Pantone 175", hex: "#6B2010" },
  { code: "176 C", name: "Pantone 176", hex: "#F7A7A0" },
  { code: "177 C", name: "Pantone 177", hex: "#F5806E" },
  { code: "178 C", name: "Pantone 178", hex: "#F55A4A" },
  { code: "179 C", name: "Pantone 179", hex: "#E83928" },
  { code: "180 C", name: "Pantone 180", hex: "#C02B1E" },
  { code: "181 C", name: "Pantone 181", hex: "#8A2218" },
  { code: "182 C", name: "Pantone 182", hex: "#F7B3BB" },
  { code: "183 C", name: "Pantone 183", hex: "#F5879A" },
  { code: "184 C", name: "Pantone 184", hex: "#F25572" },
  { code: "185 C", name: "Pantone 185", hex: "#E8182C" },
  { code: "186 C", name: "Pantone 186", hex: "#C41230" },
  { code: "187 C", name: "Pantone 187", hex: "#9E1024" },
  { code: "188 C", name: "Pantone 188", hex: "#6B0D1C" },
  { code: "189 C", name: "Pantone 189", hex: "#F7AABB" },
  { code: "190 C", name: "Pantone 190", hex: "#F5809B" },
  { code: "191 C", name: "Pantone 191", hex: "#F0507B" },
  { code: "192 C", name: "Pantone 192", hex: "#E82358" },
  { code: "193 C", name: "Pantone 193", hex: "#C2194E" },
  { code: "194 C", name: "Pantone 194", hex: "#9E1240" },
  { code: "195 C", name: "Pantone 195", hex: "#6B0D30" },
  { code: "196 C", name: "Pantone 196", hex: "#F5B8C9" },
  { code: "197 C", name: "Pantone 197", hex: "#F08AA8" },
  { code: "198 C", name: "Pantone 198", hex: "#E85A85" },
  { code: "199 C", name: "Pantone 199", hex: "#D42057" },
  { code: "200 C", name: "Pantone 200", hex: "#B31040" },
  { code: "201 C", name: "Pantone 201", hex: "#921030" },
  { code: "202 C", name: "Pantone 202", hex: "#720E24" },
  { code: "203 C", name: "Pantone 203", hex: "#F5B8D4" },
  { code: "204 C", name: "Pantone 204", hex: "#F08AB8" },
  { code: "205 C", name: "Pantone 205", hex: "#E85A9A" },
  { code: "206 C", name: "Pantone 206", hex: "#D41E6C" },
  { code: "207 C", name: "Pantone 207", hex: "#B01060" },
  { code: "208 C", name: "Pantone 208", hex: "#8A0A50" },
  { code: "209 C", name: "Pantone 209", hex: "#6B0840" },
  { code: "210 C", name: "Pantone 210", hex: "#F7AACF" },
  { code: "211 C", name: "Pantone 211", hex: "#F578B8" },
  { code: "212 C", name: "Pantone 212", hex: "#F04EA4" },
  { code: "213 C", name: "Pantone 213", hex: "#E0208A" },
  { code: "214 C", name: "Pantone 214", hex: "#BB1878" },
  { code: "215 C", name: "Pantone 215", hex: "#921260" },
  { code: "216 C", name: "Pantone 216", hex: "#6B0A48" },
  { code: "217 C", name: "Pantone 217", hex: "#F7B3D9" },
  { code: "218 C", name: "Pantone 218", hex: "#F07EC0" },
  { code: "219 C", name: "Pantone 219", hex: "#E84AAB" },
  { code: "220 C", name: "Pantone 220", hex: "#BF148C" },
  { code: "221 C", name: "Pantone 221", hex: "#9E0E76" },
  { code: "222 C", name: "Pantone 222", hex: "#780A60" },
  { code: "223 C", name: "Pantone 223", hex: "#F7AAD8" },
  { code: "224 C", name: "Pantone 224", hex: "#F575C4" },
  { code: "225 C", name: "Pantone 225", hex: "#EC40B0" },
  { code: "226 C", name: "Pantone 226", hex: "#D81898" },
  { code: "227 C", name: "Pantone 227", hex: "#B00C80" },
  { code: "228 C", name: "Pantone 228", hex: "#880A6C" },
  { code: "229 C", name: "Pantone 229", hex: "#6B0858" },
  { code: "230 C", name: "Pantone 230", hex: "#F7AADF" },
  { code: "231 C", name: "Pantone 231", hex: "#F570CC" },
  { code: "232 C", name: "Pantone 232", hex: "#EE2DB8" },
  { code: "233 C", name: "Pantone 233", hex: "#C0149C" },
  { code: "234 C", name: "Pantone 234", hex: "#970E84" },
  { code: "235 C", name: "Pantone 235", hex: "#72086C" },
  { code: "236 C", name: "Pantone 236", hex: "#F5B0E4" },
  { code: "237 C", name: "Pantone 237", hex: "#F07ED4" },
  { code: "238 C", name: "Pantone 238", hex: "#E84EC4" },
  { code: "239 C", name: "Pantone 239", hex: "#D81DAC" },
  { code: "240 C", name: "Pantone 240", hex: "#B2148E" },
  { code: "241 C", name: "Pantone 241", hex: "#8A0E74" },
  { code: "242 C", name: "Pantone 242", hex: "#680A5C" },
  { code: "250 C", name: "Pantone 250", hex: "#EFB5E3" },
  { code: "251 C", name: "Pantone 251", hex: "#E483CE" },
  { code: "252 C", name: "Pantone 252", hex: "#D84DB8" },
  { code: "253 C", name: "Pantone 253", hex: "#C024A2" },
  { code: "254 C", name: "Pantone 254", hex: "#9E1A8C" },
  { code: "255 C", name: "Pantone 255", hex: "#721078" },
  { code: "256 C", name: "Pantone 256", hex: "#DDB8E3" },
  { code: "257 C", name: "Pantone 257", hex: "#CC8FD5" },
  { code: "258 C", name: "Pantone 258", hex: "#A455B5" },
  { code: "259 C", name: "Pantone 259", hex: "#842898" },
  { code: "260 C", name: "Pantone 260", hex: "#681880" },
  { code: "261 C", name: "Pantone 261", hex: "#56107A" },
  { code: "262 C", name: "Pantone 262", hex: "#440C66" },
  { code: "263 C", name: "Pantone 263", hex: "#D8BFEE" },
  { code: "264 C", name: "Pantone 264", hex: "#BF9ADF" },
  { code: "265 C", name: "Pantone 265", hex: "#A070CC" },
  { code: "266 C", name: "Pantone 266", hex: "#7A3CB5" },
  { code: "267 C", name: "Pantone 267", hex: "#60209A" },
  { code: "268 C", name: "Pantone 268", hex: "#4E1880" },
  { code: "269 C", name: "Pantone 269", hex: "#3E1268" },
  { code: "270 C", name: "Pantone 270", hex: "#C5BFE9" },
  { code: "271 C", name: "Pantone 271", hex: "#A89FDF" },
  { code: "272 C", name: "Pantone 272", hex: "#8A7DD0" },
  { code: "273 C", name: "Pantone 273", hex: "#4A3BAA" },
  { code: "274 C", name: "Pantone 274", hex: "#341F8C" },
  { code: "275 C", name: "Pantone 275", hex: "#28147A" },
  { code: "276 C", name: "Pantone 276", hex: "#1E0E64" },
  { code: "277 C", name: "Pantone 277", hex: "#A8CDF0" },
  { code: "278 C", name: "Pantone 278", hex: "#7AB4E8" },
  { code: "279 C", name: "Pantone 279", hex: "#4A90D9" },
  { code: "280 C", name: "Pantone 280", hex: "#1A3A8C" },
  { code: "281 C", name: "Pantone 281", hex: "#162F7A" },
  { code: "282 C", name: "Pantone 282", hex: "#122060" },
  { code: "283 C", name: "Pantone 283", hex: "#98C4E8" },
  { code: "284 C", name: "Pantone 284", hex: "#62A5DB" },
  { code: "285 C", name: "Pantone 285", hex: "#0061BF" },
  { code: "286 C", name: "Pantone 286", hex: "#0032A0" },
  { code: "287 C", name: "Pantone 287", hex: "#00288E" },
  { code: "288 C", name: "Pantone 288", hex: "#002080" },
  { code: "289 C", name: "Pantone 289", hex: "#001B5C" },
  { code: "290 C", name: "Pantone 290", hex: "#AECFE0" },
  { code: "291 C", name: "Pantone 291", hex: "#82B8D9" },
  { code: "292 C", name: "Pantone 292", hex: "#5497CA" },
  { code: "293 C", name: "Pantone 293", hex: "#004BB4" },
  { code: "294 C", name: "Pantone 294", hex: "#003A9B" },
  { code: "295 C", name: "Pantone 295", hex: "#002D82" },
  { code: "296 C", name: "Pantone 296", hex: "#001C58" },
  { code: "297 C", name: "Pantone 297", hex: "#72C4E0" },
  { code: "298 C", name: "Pantone 298", hex: "#3CAADB" },
  { code: "299 C", name: "Pantone 299", hex: "#009FD4" },
  { code: "300 C", name: "Pantone 300", hex: "#0066B8" },
  { code: "301 C", name: "Pantone 301", hex: "#005596" },
  { code: "302 C", name: "Pantone 302", hex: "#00426C" },
  { code: "303 C", name: "Pantone 303", hex: "#00344A" },
  { code: "304 C", name: "Pantone 304", hex: "#8FDBEE" },
  { code: "305 C", name: "Pantone 305", hex: "#52C8E8" },
  { code: "306 C", name: "Pantone 306", hex: "#00B5E2" },
  { code: "307 C", name: "Pantone 307", hex: "#007CAF" },
  { code: "308 C", name: "Pantone 308", hex: "#006490" },
  { code: "309 C", name: "Pantone 309", hex: "#004C6C" },
  { code: "310 C", name: "Pantone 310", hex: "#5FD2E3" },
  { code: "311 C", name: "Pantone 311", hex: "#22C5D9" },
  { code: "312 C", name: "Pantone 312", hex: "#00B4CB" },
  { code: "313 C", name: "Pantone 313", hex: "#009BB5" },
  { code: "314 C", name: "Pantone 314", hex: "#00829A" },
  { code: "315 C", name: "Pantone 315", hex: "#006B80" },
  { code: "316 C", name: "Pantone 316", hex: "#005060" },
  { code: "317 C", name: "Pantone 317", hex: "#A4DEDE" },
  { code: "318 C", name: "Pantone 318", hex: "#72CECE" },
  { code: "319 C", name: "Pantone 319", hex: "#38C0C0" },
  { code: "320 C", name: "Pantone 320", hex: "#00A4AA" },
  { code: "321 C", name: "Pantone 321", hex: "#00898E" },
  { code: "322 C", name: "Pantone 322", hex: "#007276" },
  { code: "323 C", name: "Pantone 323", hex: "#005A5C" },
  { code: "324 C", name: "Pantone 324", hex: "#9AD4CC" },
  { code: "325 C", name: "Pantone 325", hex: "#66C0B8" },
  { code: "326 C", name: "Pantone 326", hex: "#00AAAA" },
  { code: "327 C", name: "Pantone 327", hex: "#007872" },
  { code: "328 C", name: "Pantone 328", hex: "#00665E" },
  { code: "329 C", name: "Pantone 329", hex: "#005248" },
  { code: "330 C", name: "Pantone 330", hex: "#003D38" },
  { code: "331 C", name: "Pantone 331", hex: "#B0E0D4" },
  { code: "332 C", name: "Pantone 332", hex: "#8ACCC0" },
  { code: "333 C", name: "Pantone 333", hex: "#44BAA8" },
  { code: "334 C", name: "Pantone 334", hex: "#008E78" },
  { code: "335 C", name: "Pantone 335", hex: "#007560" },
  { code: "336 C", name: "Pantone 336", hex: "#005E4E" },
  { code: "337 C", name: "Pantone 337", hex: "#98D4BC" },
  { code: "338 C", name: "Pantone 338", hex: "#68C4A4" },
  { code: "339 C", name: "Pantone 339", hex: "#00B287" },
  { code: "340 C", name: "Pantone 340", hex: "#009070" },
  { code: "341 C", name: "Pantone 341", hex: "#007558" },
  { code: "342 C", name: "Pantone 342", hex: "#006047" },
  { code: "343 C", name: "Pantone 343", hex: "#004C38" },
  { code: "344 C", name: "Pantone 344", hex: "#AADAB2" },
  { code: "345 C", name: "Pantone 345", hex: "#85CB8E" },
  { code: "346 C", name: "Pantone 346", hex: "#50BA72" },
  { code: "347 C", name: "Pantone 347", hex: "#009E4A" },
  { code: "348 C", name: "Pantone 348", hex: "#00833A" },
  { code: "349 C", name: "Pantone 349", hex: "#00672E" },
  { code: "350 C", name: "Pantone 350", hex: "#264E28" },
  { code: "351 C", name: "Pantone 351", hex: "#BEEABA" },
  { code: "352 C", name: "Pantone 352", hex: "#98E0A0" },
  { code: "353 C", name: "Pantone 353", hex: "#70D48A" },
  { code: "354 C", name: "Pantone 354", hex: "#00B24A" },
  { code: "355 C", name: "Pantone 355", hex: "#009840" },
  { code: "356 C", name: "Pantone 356", hex: "#007832" },
  { code: "357 C", name: "Pantone 357", hex: "#295E2C" },
  { code: "358 C", name: "Pantone 358", hex: "#B4E2A0" },
  { code: "359 C", name: "Pantone 359", hex: "#98DA85" },
  { code: "360 C", name: "Pantone 360", hex: "#6CC56B" },
  { code: "361 C", name: "Pantone 361", hex: "#42B842" },
  { code: "362 C", name: "Pantone 362", hex: "#399B37" },
  { code: "363 C", name: "Pantone 363", hex: "#308030" },
  { code: "364 C", name: "Pantone 364", hex: "#286628" },
  { code: "365 C", name: "Pantone 365", hex: "#C8EAAA" },
  { code: "366 C", name: "Pantone 366", hex: "#AEDE88" },
  { code: "367 C", name: "Pantone 367", hex: "#8ED462" },
  { code: "368 C", name: "Pantone 368", hex: "#5DC535" },
  { code: "369 C", name: "Pantone 369", hex: "#42AA2E" },
  { code: "370 C", name: "Pantone 370", hex: "#388A26" },
  { code: "371 C", name: "Pantone 371", hex: "#2E6E1E" },
  { code: "372 C", name: "Pantone 372", hex: "#D4F0A4" },
  { code: "373 C", name: "Pantone 373", hex: "#C0E880" },
  { code: "374 C", name: "Pantone 374", hex: "#A8DC58" },
  { code: "375 C", name: "Pantone 375", hex: "#7EC800" },
  { code: "376 C", name: "Pantone 376", hex: "#68A800" },
  { code: "377 C", name: "Pantone 377", hex: "#557A00" },
  { code: "378 C", name: "Pantone 378", hex: "#425800" },
  { code: "379 C", name: "Pantone 379", hex: "#DCEA74" },
  { code: "380 C", name: "Pantone 380", hex: "#CBE040" },
  { code: "381 C", name: "Pantone 381", hex: "#B5D200" },
  { code: "382 C", name: "Pantone 382", hex: "#9DC800" },
  { code: "383 C", name: "Pantone 383", hex: "#879A00" },
  { code: "384 C", name: "Pantone 384", hex: "#6C7A00" },
  { code: "385 C", name: "Pantone 385", hex: "#535A00" },
  { code: "386 C", name: "Pantone 386", hex: "#E2EC78" },
  { code: "387 C", name: "Pantone 387", hex: "#D8E84C" },
  { code: "388 C", name: "Pantone 388", hex: "#C8E000" },
  { code: "389 C", name: "Pantone 389", hex: "#C0D900" },
  { code: "390 C", name: "Pantone 390", hex: "#A8C000" },
  { code: "391 C", name: "Pantone 391", hex: "#8A9E00" },
  { code: "392 C", name: "Pantone 392", hex: "#6E7C00" },
  { code: "393 C", name: "Pantone 393", hex: "#F0EE82" },
  { code: "394 C", name: "Pantone 394", hex: "#EAE84E" },
  { code: "395 C", name: "Pantone 395", hex: "#E4E000" },
  { code: "396 C", name: "Pantone 396", hex: "#D8D800" },
  { code: "397 C", name: "Pantone 397", hex: "#C0BC00" },
  { code: "398 C", name: "Pantone 398", hex: "#A8A200" },
  { code: "399 C", name: "Pantone 399", hex: "#8A8400" },
  { code: "400 C", name: "Pantone 400", hex: "#C8B8A8" },
  { code: "401 C", name: "Pantone 401", hex: "#B8A898" },
  { code: "402 C", name: "Pantone 402", hex: "#A89888" },
  { code: "403 C", name: "Pantone 403", hex: "#988878" },
  { code: "404 C", name: "Pantone 404", hex: "#887868" },
  { code: "405 C", name: "Pantone 405", hex: "#706050" },
  { code: "406 C", name: "Pantone 406", hex: "#C8BCB0" },
  { code: "407 C", name: "Pantone 407", hex: "#B8AAA0" },
  { code: "408 C", name: "Pantone 408", hex: "#A89890" },
  { code: "409 C", name: "Pantone 409", hex: "#988880" },
  { code: "410 C", name: "Pantone 410", hex: "#887870" },
  { code: "411 C", name: "Pantone 411", hex: "#706058" },
  { code: "412 C", name: "Pantone 412", hex: "#4A4040" },
  { code: "413 C", name: "Pantone 413", hex: "#C0BCAC" },
  { code: "414 C", name: "Pantone 414", hex: "#B0ACA0" },
  { code: "415 C", name: "Pantone 415", hex: "#A0A090" },
  { code: "416 C", name: "Pantone 416", hex: "#909080" },
  { code: "417 C", name: "Pantone 417", hex: "#787870" },
  { code: "418 C", name: "Pantone 418", hex: "#606058" },
  { code: "419 C", name: "Pantone 419", hex: "#303028" },
  { code: "420 C", name: "Pantone 420", hex: "#C8C8C0" },
  { code: "421 C", name: "Pantone 421", hex: "#B8B8B0" },
  { code: "422 C", name: "Pantone 422", hex: "#A8A8A0" },
  { code: "423 C", name: "Pantone 423", hex: "#989890" },
  { code: "424 C", name: "Pantone 424", hex: "#807878" },
  { code: "425 C", name: "Pantone 425", hex: "#686060" },
  { code: "426 C", name: "Pantone 426", hex: "#303030" },
  { code: "427 C", name: "Pantone 427", hex: "#D4D4D0" },
  { code: "428 C", name: "Pantone 428", hex: "#C0C0BC" },
  { code: "429 C", name: "Pantone 429", hex: "#A0A4A8" },
  { code: "430 C", name: "Pantone 430", hex: "#808890" },
  { code: "431 C", name: "Pantone 431", hex: "#607078" },
  { code: "432 C", name: "Pantone 432", hex: "#485460" },
  { code: "433 C", name: "Pantone 433", hex: "#303840" },
  { code: "434 C", name: "Pantone 434", hex: "#D4C4BC" },
  { code: "435 C", name: "Pantone 435", hex: "#C4B0A8" },
  { code: "436 C", name: "Pantone 436", hex: "#B09898" },
  { code: "437 C", name: "Pantone 437", hex: "#907878" },
  { code: "438 C", name: "Pantone 438", hex: "#705858" },
  { code: "439 C", name: "Pantone 439", hex: "#504040" },
  { code: "440 C", name: "Pantone 440", hex: "#382E2C" },
  { code: "441 C", name: "Pantone 441", hex: "#C0C8C8" },
  { code: "442 C", name: "Pantone 442", hex: "#A8B4B8" },
  { code: "443 C", name: "Pantone 443", hex: "#90A0A4" },
  { code: "444 C", name: "Pantone 444", hex: "#788890" },
  { code: "445 C", name: "Pantone 445", hex: "#586870" },
  { code: "446 C", name: "Pantone 446", hex: "#485058" },
  { code: "447 C", name: "Pantone 447", hex: "#303838" },
  { code: "448 C", name: "Pantone 448", hex: "#4A3C1E" },
  { code: "449 C", name: "Pantone 449", hex: "#5A4820" },
  { code: "450 C", name: "Pantone 450", hex: "#6A5828" },
  { code: "451 C", name: "Pantone 451", hex: "#B0A074" },
  { code: "452 C", name: "Pantone 452", hex: "#C0B490" },
  { code: "453 C", name: "Pantone 453", hex: "#D0C8A8" },
  { code: "454 C", name: "Pantone 454", hex: "#E0DABB" },
  { code: "455 C", name: "Pantone 455", hex: "#7A5A10" },
  { code: "456 C", name: "Pantone 456", hex: "#C09218" },
  { code: "457 C", name: "Pantone 457", hex: "#986800" },
  { code: "458 C", name: "Pantone 458", hex: "#E8D080" },
  { code: "459 C", name: "Pantone 459", hex: "#ECD898" },
  { code: "460 C", name: "Pantone 460", hex: "#F0E0B0" },
  { code: "461 C", name: "Pantone 461", hex: "#F5EAC8" },
  { code: "462 C", name: "Pantone 462", hex: "#785020" },
  { code: "463 C", name: "Pantone 463", hex: "#8A5C2A" },
  { code: "464 C", name: "Pantone 464", hex: "#9E6C34" },
  { code: "465 C", name: "Pantone 465", hex: "#C09060" },
  { code: "466 C", name: "Pantone 466", hex: "#D0AA82" },
  { code: "467 C", name: "Pantone 467", hex: "#E0C8A8" },
  { code: "468 C", name: "Pantone 468", hex: "#EAD8C0" },
  { code: "469 C", name: "Pantone 469", hex: "#7A4018" },
  { code: "470 C", name: "Pantone 470", hex: "#9A5020" },
  { code: "471 C", name: "Pantone 471", hex: "#B86028" },
  { code: "472 C", name: "Pantone 472", hex: "#E0986C" },
  { code: "473 C", name: "Pantone 473", hex: "#EDB898" },
  { code: "474 C", name: "Pantone 474", hex: "#F0C8AC" },
  { code: "475 C", name: "Pantone 475", hex: "#F5D8C4" },
  { code: "476 C", name: "Pantone 476", hex: "#583424" },
  { code: "477 C", name: "Pantone 477", hex: "#6C3C28" },
  { code: "478 C", name: "Pantone 478", hex: "#804830" },
  { code: "479 C", name: "Pantone 479", hex: "#B08470" },
  { code: "480 C", name: "Pantone 480", hex: "#D0AA98" },
  { code: "481 C", name: "Pantone 481", hex: "#E0C4B4" },
  { code: "482 C", name: "Pantone 482", hex: "#EED8CC" },
  { code: "485 C", name: "Pantone 485", hex: "#D62828" },
  { code: "486 C", name: "Pantone 486", hex: "#E8A08C" },
  { code: "487 C", name: "Pantone 487", hex: "#F0B8A8" },
  { code: "488 C", name: "Pantone 488", hex: "#F5CCC0" },
  { code: "489 C", name: "Pantone 489", hex: "#F8D8D0" },
  { code: "490 C", name: "Pantone 490", hex: "#5C1C1C" },
  { code: "491 C", name: "Pantone 491", hex: "#782020" },
  { code: "492 C", name: "Pantone 492", hex: "#9A2828" },
  { code: "493 C", name: "Pantone 493", hex: "#D48A8A" },
  { code: "494 C", name: "Pantone 494", hex: "#E8AAAA" },
  { code: "495 C", name: "Pantone 495", hex: "#F0BEBE" },
  { code: "496 C", name: "Pantone 496", hex: "#F8D4D4" },
  { code: "497 C", name: "Pantone 497", hex: "#5A1E1E" },
  { code: "498 C", name: "Pantone 498", hex: "#7A2828" },
  { code: "499 C", name: "Pantone 499", hex: "#963030" },
  { code: "500 C", name: "Pantone 500", hex: "#D09090" },
  { code: "5005 C", name: "Pantone 5005", hex: "#3A1C28" },
  { code: "5015 C", name: "Pantone 5015", hex: "#3A5870" },
  { code: "5025 C", name: "Pantone 5025", hex: "#286858" },
  { code: "5035 C", name: "Pantone 5035", hex: "#386854" },
  { code: "5085 C", name: "Pantone 5085", hex: "#582838" },
  { code: "5115 C", name: "Pantone 5115", hex: "#6A3048" },
  { code: "5125 C", name: "Pantone 5125", hex: "#7A3858" },
  { code: "5135 C", name: "Pantone 5135", hex: "#8A4868" },
  { code: "5145 C", name: "Pantone 5145", hex: "#9A5878" },
  { code: "5155 C", name: "Pantone 5155", hex: "#B07890" },
  { code: "5165 C", name: "Pantone 5165", hex: "#C898A8" },
  { code: "5175 C", name: "Pantone 5175", hex: "#D8B0BC" },
  { code: "5185 C", name: "Pantone 5185", hex: "#482028" },
  { code: "5195 C", name: "Pantone 5195", hex: "#3A1820" },
  { code: "5215 C", name: "Pantone 5215", hex: "#C8A0A8" },
  { code: "5225 C", name: "Pantone 5225", hex: "#D0B0B8" },
  { code: "5235 C", name: "Pantone 5235", hex: "#E0C8D0" },
  { code: "5245 C", name: "Pantone 5245", hex: "#ECD8E0" },
  { code: "5255 C", name: "Pantone 5255", hex: "#302058" },
  { code: "5265 C", name: "Pantone 5265", hex: "#383060" },
  { code: "5275 C", name: "Pantone 5275", hex: "#404070" },
  { code: "5285 C", name: "Pantone 5285", hex: "#7878A8" },
  { code: "5295 C", name: "Pantone 5295", hex: "#9898C0" },
  { code: "5305 C", name: "Pantone 5305", hex: "#B8B8D4" },
  { code: "5315 C", name: "Pantone 5315", hex: "#D0D0E4" },
  { code: "5325 C", name: "Pantone 5325", hex: "#385870" },
  { code: "5335 C", name: "Pantone 5335", hex: "#284860" },
  { code: "5345 C", name: "Pantone 5345", hex: "#285068" },
  { code: "5355 C", name: "Pantone 5355", hex: "#304E60" },
  { code: "5365 C", name: "Pantone 5365", hex: "#688898" },
  { code: "5375 C", name: "Pantone 5375", hex: "#88A8B8" },
  { code: "5385 C", name: "Pantone 5385", hex: "#A8C0CC" },
  { code: "5395 C", name: "Pantone 5395", hex: "#283040" },
  { code: "5405 C", name: "Pantone 5405", hex: "#486080" },
  { code: "5415 C", name: "Pantone 5415", hex: "#587090" },
  { code: "5425 C", name: "Pantone 5425", hex: "#7890A4" },
  { code: "5435 C", name: "Pantone 5435", hex: "#9AB0C0" },
  { code: "5445 C", name: "Pantone 5445", hex: "#B4C8D4" },
  { code: "5455 C", name: "Pantone 5455", hex: "#CCD8E0" },
  { code: "5463 C", name: "Pantone 5463", hex: "#1E3C40" },
  { code: "5467 C", name: "Pantone 5467", hex: "#284448" },
  { code: "5477 C", name: "Pantone 5477", hex: "#385458" },
  { code: "5487 C", name: "Pantone 5487", hex: "#587C80" },
  { code: "5497 C", name: "Pantone 5497", hex: "#7898A0" },
  { code: "5507 C", name: "Pantone 5507", hex: "#98B0B8" },
  { code: "5517 C", name: "Pantone 5517", hex: "#B8CED4" },
  { code: "5523 C", name: "Pantone 5523", hex: "#6898A0" },
  { code: "5527 C", name: "Pantone 5527", hex: "#507880" },
  { code: "5535 C", name: "Pantone 5535", hex: "#304E54" },
  { code: "5545 C", name: "Pantone 5545", hex: "#607878" },
  { code: "5555 C", name: "Pantone 5555", hex: "#789898" },
  { code: "5565 C", name: "Pantone 5565", hex: "#98B4B4" },
  { code: "5575 C", name: "Pantone 5575", hex: "#B4CCCC" },
  { code: "5583 C", name: "Pantone 5583", hex: "#8AACAC" },
  { code: "5595 C", name: "Pantone 5595", hex: "#4A7878" },
  { code: "5605 C", name: "Pantone 5605", hex: "#284840" },
  { code: "5615 C", name: "Pantone 5615", hex: "#4A6860" },
  { code: "5625 C", name: "Pantone 5625", hex: "#6A8878" },
  { code: "5635 C", name: "Pantone 5635", hex: "#8AA898" },
  { code: "5645 C", name: "Pantone 5645", hex: "#ACC8B8" },
  { code: "5655 C", name: "Pantone 5655", hex: "#C4DCD0" },
  { code: "5665 C", name: "Pantone 5665", hex: "#D8EAE4" },
  { code: "5743 C", name: "Pantone 5743", hex: "#3C4820" },
  { code: "5747 C", name: "Pantone 5747", hex: "#505A20" },
  { code: "5753 C", name: "Pantone 5753", hex: "#6A7830" },
  { code: "5757 C", name: "Pantone 5757", hex: "#849838" },
  { code: "5763 C", name: "Pantone 5763", hex: "#9AAA50" },
  { code: "5767 C", name: "Pantone 5767", hex: "#B8C470" },
  { code: "5773 C", name: "Pantone 5773", hex: "#C8D090" },
  { code: "5777 C", name: "Pantone 5777", hex: "#D8E0B0" },
  { code: "5783 C", name: "Pantone 5783", hex: "#9AAA6A" },
  { code: "5793 C", name: "Pantone 5793", hex: "#AEC080" },
  { code: "5803 C", name: "Pantone 5803", hex: "#C4D098" },
  { code: "5807 C", name: "Pantone 5807", hex: "#D4DEB0" },
  { code: "5815 C", name: "Pantone 5815", hex: "#605410" },
  { code: "5825 C", name: "Pantone 5825", hex: "#807018" },
  { code: "5835 C", name: "Pantone 5835", hex: "#A89030" },
  { code: "5845 C", name: "Pantone 5845", hex: "#C8B05A" },
  { code: "5855 C", name: "Pantone 5855", hex: "#DCC878" },
  { code: "5865 C", name: "Pantone 5865", hex: "#ECD898" },
  { code: "5875 C", name: "Pantone 5875", hex: "#F2E8B8" },
  // Named specials
  { code: "Yellow C", name: "Yellow", hex: "#FEDD00" },
  { code: "Orange 021 C", name: "Orange 021", hex: "#FE5000" },
  { code: "Warm Red C", name: "Warm Red", hex: "#F9423A" },
  { code: "Red 032 C", name: "Red 032", hex: "#EF3340" },
  { code: "Rubine Red C", name: "Rubine Red", hex: "#CE0058" },
  { code: "Rhodamine Red C", name: "Rhodamine Red", hex: "#E10098" },
  { code: "Purple C", name: "Purple", hex: "#8031A7" },
  { code: "Violet C", name: "Violet", hex: "#440099" },
  { code: "Blue 072 C", name: "Blue 072", hex: "#141B4D" },
  { code: "Reflex Blue C", name: "Reflex Blue", hex: "#001489" },
  { code: "Process Blue C", name: "Process Blue", hex: "#0085CA" },
  { code: "Green C", name: "Green", hex: "#00A550" },
  { code: "Black C", name: "Black", hex: "#2B2926" },
  { code: "White", name: "White", hex: "#FFFFFF" },
  { code: "Cool Gray 1 C", name: "Cool Gray 1", hex: "#E0DED8" },
  { code: "Cool Gray 2 C", name: "Cool Gray 2", hex: "#D4D2CC" },
  { code: "Cool Gray 3 C", name: "Cool Gray 3", hex: "#C8C6C0" },
  { code: "Cool Gray 4 C", name: "Cool Gray 4", hex: "#B4B2AC" },
  { code: "Cool Gray 5 C", name: "Cool Gray 5", hex: "#A4A2A0" },
  { code: "Cool Gray 6 C", name: "Cool Gray 6", hex: "#969490" },
  { code: "Cool Gray 7 C", name: "Cool Gray 7", hex: "#888884" },
  { code: "Cool Gray 8 C", name: "Cool Gray 8", hex: "#747470" },
  { code: "Cool Gray 9 C", name: "Cool Gray 9", hex: "#606060" },
  { code: "Cool Gray 10 C", name: "Cool Gray 10", hex: "#4E4E4A" },
  { code: "Cool Gray 11 C", name: "Cool Gray 11", hex: "#3A3A38" },
  { code: "Warm Gray 1 C", name: "Warm Gray 1", hex: "#E0DAD0" },
  { code: "Warm Gray 2 C", name: "Warm Gray 2", hex: "#D4CEC4" },
  { code: "Warm Gray 3 C", name: "Warm Gray 3", hex: "#C8C2B8" },
  { code: "Warm Gray 4 C", name: "Warm Gray 4", hex: "#B8B2A8" },
  { code: "Warm Gray 5 C", name: "Warm Gray 5", hex: "#ACA698" },
  { code: "Warm Gray 6 C", name: "Warm Gray 6", hex: "#9C9688" },
  { code: "Warm Gray 7 C", name: "Warm Gray 7", hex: "#8C8678" },
  { code: "Warm Gray 8 C", name: "Warm Gray 8", hex: "#7A7468" },
  { code: "Warm Gray 9 C", name: "Warm Gray 9", hex: "#6A6458" },
  { code: "Warm Gray 10 C", name: "Warm Gray 10", hex: "#5A5448" },
  { code: "Warm Gray 11 C", name: "Warm Gray 11", hex: "#4A4438" },
];

// ── 색상 변환 ──
function cl(v,a,b){return Math.max(a,Math.min(b,v))}
function cmykToRgb(c,m,y,k){
  c=cl(c,0,100);m=cl(m,0,100);y=cl(y,0,100);k=cl(k,0,100);
  return{r:Math.round(255*(1-c/100)*(1-k/100)),g:Math.round(255*(1-m/100)*(1-k/100)),b:Math.round(255*(1-y/100)*(1-k/100))};
}
function rgbToCmyk(r,g,b){
  var rn=r/255,gn=g/255,bn=b/255,k=1-Math.max(rn,gn,bn);
  if(k===1)return{c:0,m:0,y:0,k:100};
  return{c:Math.round(((1-rn-k)/(1-k))*100),m:Math.round(((1-gn-k)/(1-k))*100),y:Math.round(((1-bn-k)/(1-k))*100),k:Math.round(k*100)};
}
function hslToRgb(h,s,l){
  h=cl(h,0,360);s=cl(s,0,100)/100;l=cl(l,0,100)/100;
  var c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2,r=0,g=0,b=0;
  if(h<60){r=c;g=x}else if(h<120){r=x;g=c}else if(h<180){g=c;b=x}else if(h<240){g=x;b=c}else if(h<300){r=x;b=c}else{r=c;b=x}
  return{r:Math.round((r+m)*255),g:Math.round((g+m)*255),b:Math.round((b+m)*255)};
}
function rgbToHex(r,g,b){return'#'+[r,g,b].map(function(v){return cl(Math.round(v),0,255).toString(16).padStart(2,'0')}).join('')}
function hexToRgb(hex){
  hex=hex.trim().replace(/^#/,'');
  if(hex.length===3)hex=hex.split('').map(function(c){return c+c}).join('');
  if(hex.length!==6||!/^[0-9a-fA-F]{6}$/.test(hex))return null;
  return{r:parseInt(hex.slice(0,2),16),g:parseInt(hex.slice(2,4),16),b:parseInt(hex.slice(4,6),16)};
}
function lin(v){v/=255;return v<=0.04045?v/12.92:Math.pow((v+0.055)/1.055,2.4)}
function rgbToXyz(r,g,b){var rl=lin(r),gl=lin(g),bl=lin(b);return{x:rl*0.4124564+gl*0.3575761+bl*0.1804375,y:rl*0.2126729+gl*0.7151522+bl*0.0721750,z:rl*0.0193339+gl*0.1191920+bl*0.9503041}}
function ft(t){return t>0.008856?Math.cbrt(t):7.787*t+16/116}
function xyzToLab(x,y,z){var fx=ft(x*100/95.047),fy=ft(y),fz=ft(z*100/108.883);return{L:116*fy-16,a:500*(fx-fy),b:200*(fy-fz)}}
function rgbToLab(r,g,b){var xyz=rgbToXyz(r,g,b);return xyzToLab(xyz.x,xyz.y,xyz.z)}
function ciede2000(l1,l2){
  var L1=l1.L,a1=l1.a,b1=l1.b,L2=l2.L,a2=l2.a,b2=l2.b;
  var C1ab=Math.sqrt(a1*a1+b1*b1),C2ab=Math.sqrt(a2*a2+b2*b2),Ca=(C1ab+C2ab)/2,Ca7=Math.pow(Ca,7);
  var G=0.5*(1-Math.sqrt(Ca7/(Ca7+25**7)));
  var a1p=a1*(1+G),a2p=a2*(1+G),C1p=Math.sqrt(a1p*a1p+b1*b1),C2p=Math.sqrt(a2p*a2p+b2*b2);
  var h1p=(Math.atan2(b1,a1p)*180/Math.PI+360)%360,h2p=(Math.atan2(b2,a2p)*180/Math.PI+360)%360;
  var dLp=L2-L1,dCp=C2p-C1p,dhp;
  if(C1p*C2p===0)dhp=0;else if(Math.abs(h2p-h1p)<=180)dhp=h2p-h1p;else if(h2p-h1p>180)dhp=h2p-h1p-360;else dhp=h2p-h1p+360;
  var dHp=2*Math.sqrt(C1p*C2p)*Math.sin(dhp/2*Math.PI/180);
  var Lpa=(L1+L2)/2,Cpa=(C1p+C2p)/2,Hpa;
  if(C1p*C2p===0)Hpa=h1p+h2p;else if(Math.abs(h1p-h2p)<=180)Hpa=(h1p+h2p)/2;else if(h1p+h2p<360)Hpa=(h1p+h2p+360)/2;else Hpa=(h1p+h2p-360)/2;
  var T=1-0.17*Math.cos((Hpa-30)*Math.PI/180)+0.24*Math.cos(2*Hpa*Math.PI/180)+0.32*Math.cos((3*Hpa+6)*Math.PI/180)-0.20*Math.cos((4*Hpa-63)*Math.PI/180);
  var SL=1+0.015*Math.pow(Lpa-50,2)/Math.sqrt(20+Math.pow(Lpa-50,2)),SC=1+0.045*Cpa,SH=1+0.015*Cpa*T;
  var Cp7=Math.pow(Cpa,7),RC=2*Math.sqrt(Cp7/(Cp7+25**7)),dT=30*Math.exp(-Math.pow((Hpa-275)/25,2)),RT=-Math.sin(2*dT*Math.PI/180)*RC;
  return Math.round(Math.sqrt(Math.pow(dLp/SL,2)+Math.pow(dCp/SC,2)+Math.pow(dHp/SH,2)+RT*(dCp/SC)*(dHp/SH))*100)/100;
}
function findPantones(rgb,n){
  var lab=rgbToLab(rgb.r,rgb.g,rgb.b);
  return PANTONE_COLORS.map(function(p){
    var pr=hexToRgb(p.hex),pl=rgbToLab(pr.r,pr.g,pr.b);
    return{code:p.code,name:p.name,hex:p.hex,rgb:pr,dE:ciede2000(lab,pl)};
  }).sort(function(a,b){return a.dE-b.dE}).slice(0,n);
}

// ── UI 상태 ──
var curTab='cmyk', curItem=null, loadTimer=null, loadIdx=0;
var overlay=null;
var MSGS=['🔍 색상값 분석 중...','📊 LAB 색공간으로 변환 중...','🎯 '+PANTONE_COLORS.length+'개 팬톤 색상과 비교 중...','✨ 가장 가까운 색상을 찾았습니다!'];

function $(id){return document.getElementById(id)}
function getRgb(){
  if(curTab==='cmyk'){var c=+$('pf-c').value||0,m=+$('pf-m').value||0,y=+$('pf-y').value||0,k=+$('pf-k').value||0;return cmykToRgb(c,m,y,k)}
  if(curTab==='rgb'){return{r:cl(+$('pf-r').value||0,0,255),g:cl(+$('pf-g').value||0,0,255),b:cl(+$('pf-b').value||0,0,255)}}
  if(curTab==='hex'){return hexToRgb($('pf-hex').value.trim())||{r:128,g:128,b:128}}
  var h=+$('pf-h').value||0,s=+$('pf-s').value||0,l=+$('pf-l').value||50;return hslToRgb(h,s,l);
}
function syncPrev(tab){
  var rgb=getRgb(),hex=rgbToHex(rgb.r,rgb.g,rgb.b);
  var p=$('pf-prev-'+tab);if(p)p.style.background=hex;
  if(tab==='hex'){var sw=$('pf-hex-swatch');if(sw)sw.style.background=hex}
}

// ── 뷰 전환 ──
function switchView(view){
  document.querySelectorAll('#pf-app .pf-view').forEach(function(v){v.classList.remove('on')});
  var el=$(view==='search'?'pf-search-view':'pf-history-view');
  if(el)el.classList.add('on');
  document.querySelectorAll('#pf-app .pf-nav-btn').forEach(function(b){
    b.classList.toggle('on',b.dataset.view===view);
  });
  if(view==='history')renderHistory();
}

// ── 탭 전환 ──
function switchTab(tab){
  curTab=tab;
  document.querySelectorAll('#pf-app .pf-tab').forEach(function(t){t.classList.toggle('on',t.dataset.tab===tab)});
  document.querySelectorAll('#pf-app .pf-panel').forEach(function(p){p.classList.remove('on')});
  var panel=$('pf-panel-'+tab);if(panel)panel.classList.add('on');
  syncPrev(tab);
}

// ── 검색 ──
function doSearch(){
  var rgb=getRgb();
  $('pf-loading').classList.add('on');
  $('pf-results').classList.remove('on');
  loadIdx=0;$('pf-loading-msg').textContent=MSGS[0];
  clearInterval(loadTimer);
  loadTimer=setInterval(function(){
    var m=$('pf-loading-msg');if(!m)return;
    m.style.opacity='0';
    setTimeout(function(){loadIdx=(loadIdx+1)%MSGS.length;m.textContent=MSGS[loadIdx];m.style.opacity='1'},300);
  },900);
  var t=Date.now();
  setTimeout(function(){
    var res=findPantones(rgb,8);
    var wait=Math.max(0,1200-(Date.now()-t));
    setTimeout(function(){
      clearInterval(loadTimer);
      $('pf-loading').classList.remove('on');
      renderResults(res);
    },wait);
  },40);
}

function renderResults(list){
  var grid=$('pf-grid');grid.innerHTML='';
  list.forEach(function(r,i){
    var chip=makeChip(r,i===0);
    chip.addEventListener('click',function(){openModal(r)});
    grid.appendChild(chip);
    setTimeout(function(){chip.classList.add('show')},50*i);
  });
  $('pf-results').classList.add('on');
}

function makeChip(r,best){
  var wrap=document.createElement('div');wrap.className='pf-chip';
  var color=document.createElement('div');color.className='pf-chip-color';color.style.background=r.hex;
  var badge=document.createElement('span');
  badge.className='pf-de-badge '+(r.dE<2?'pf-de-g':r.dE<5?'pf-de-y':'pf-de-r');
  badge.textContent='\u0394E '+r.dE.toFixed(1);color.appendChild(badge);
  if(best){var rib=document.createElement('span');rib.className='pf-ribbon';rib.textContent='최적 매치';color.appendChild(rib)}
  var bot=document.createElement('div');bot.className='pf-chip-bottom';
  var code=document.createElement('div');code.className='pf-chip-code';code.textContent='PANTONE\u00AE '+r.code;
  var name=document.createElement('div');name.className='pf-chip-name';name.textContent=r.name;
  bot.appendChild(code);bot.appendChild(name);wrap.appendChild(color);wrap.appendChild(bot);
  return wrap;
}

function resetSearch(){
  $('pf-results').classList.remove('on');
  $('pf-grid').innerHTML='';
  ['pf-c','pf-m','pf-y','pf-k'].forEach(function(id){var e=$(id);if(e)e.value=0});
  ['pf-r','pf-g','pf-b'].forEach(function(id){var e=$(id);if(e)e.value=128});
  var pk=$('pf-picker');if(pk)pk.value='#808080';
  var hx=$('pf-hex');if(hx)hx.value='';
  ['pf-h','pf-s'].forEach(function(id){var e=$(id);if(e)e.value=0});
  var pl=$('pf-l');if(pl)pl.value=50;
  ['cmyk','rgb','hex','hsl'].forEach(function(t){var p=$('pf-prev-'+t);if(p)p.style.background='#e4e4e7'});
  var sw=$('pf-hex-swatch');if(sw)sw.style.background='';
}

// ── 모달 ──
function ensureModal(){
  if(overlay&&document.body.contains(overlay))return;
  if(!document.getElementById('pf-modal-css')){
    var st=document.createElement('style');st.id='pf-modal-css';
    st.textContent='#pf-ov{--ac:#C1121F;--ac2:#8B0000;--ac3:#FFE8E8;--bd:#E4E4E7;--s2:#F4F4F5;--tx:#18181B;--tx2:#71717A;display:none;position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:2147483647;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;font-family:'Noto Sans KR',sans-serif}'
    +'#pf-ov.on{display:flex!important}'
    +'#pf-ov .pm{background:#fff;border-radius:18px;padding:28px 24px;max-width:400px;width:100%;position:relative;animation:pmIn .22s cubic-bezier(.34,1.56,.64,1) both;max-height:90vh;overflow-y:auto;box-sizing:border-box}'
    +'@keyframes pmIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}'
    +'#pf-ov .pm-x{position:absolute;top:12px;right:12px;background:var(--s2);border:1px solid var(--bd);color:var(--tx2);width:28px;height:28px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}'
    +'#pf-ov .pm-x:hover{background:var(--ac);border-color:var(--ac);color:#fff}'
    +'#pf-ov .pm-chip{width:160px;height:240px;border-radius:0 0 12px 12px;overflow:hidden;margin:0 auto 20px;box-shadow:0 4px 20px rgba(0,0,0,.16)}'
    +'#pf-ov .pm-chip-color{height:65%}'
    +'#pf-ov .pm-chip-bot{height:35%;background:#fff;display:flex;flex-direction:column;justify-content:center;padding:10px 14px}'
    +'#pf-ov .pm-code-sm{font-size:13px;font-weight:700;color:#1a1a1a}'
    +'#pf-ov .pm-name-sm{font-size:10px;color:#666}'
    +'#pf-ov .pm-title{text-align:center;font-size:20px;font-weight:700;margin-bottom:4px}'
    +'#pf-ov .pm-sub{text-align:center;font-size:12px;color:var(--tx2);margin-bottom:18px}'
    +'#pf-ov .pm-row{display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--bd);gap:10px}'
    +'#pf-ov .pm-row:last-of-type{border-bottom:none}'
    +'#pf-ov .pm-lbl{color:var(--tx2);font-size:11px;font-weight:600;width:56px;flex-shrink:0}'
    +'#pf-ov .pm-val{font-family:monospace;font-size:12px;color:var(--tx);flex:1;overflow:hidden;text-overflow:ellipsis}'
    +'#pf-ov .pm-copy{background:var(--s2);border:1px solid var(--bd);color:var(--tx2);padding:3px 9px;border-radius:5px;font-size:11px;cursor:pointer;white-space:nowrap;transition:all .15s}'
    +'#pf-ov .pm-copy:hover,#pf-ov .pm-copy.ok{background:var(--ac3);border-color:var(--ac);color:var(--ac)}'
    +'#pf-ov .pm-save{width:100%;padding:11px;background:transparent;border:1.5px solid var(--ac);color:var(--ac);border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;transition:all .2s;margin-top:14px}'
    +'#pf-ov .pm-save:hover{background:var(--ac);color:#fff}'
    +'#pf-ov .pm-save.saved{border-color:var(--ac2);color:var(--ac2)}';
    document.head.appendChild(st);
  }
  overlay=document.createElement('div');overlay.id='pf-ov';
  overlay.innerHTML='<div class="pm" id="pf-mc"><button class="pm-x" id="pf-mx">&times;</button><div class="pf-chip pm-chip"><div class="pm-chip-color" id="pf-mc-color"></div><div class="pm-chip-bot"><div class="pm-code-sm" id="pf-mc-code"></div><div class="pm-name-sm" id="pf-mc-name-sm"></div></div></div><div class="pm-title" id="pf-mc-title"></div><div class="pm-sub" id="pf-mc-sub"></div><div id="pf-mc-rows"></div><button class="pm-save" id="pf-mc-save">히스토리에 저장</button></div>';
  document.body.appendChild(overlay);
  overlay.addEventListener('click',function(e){if(e.target===overlay)closeModal()});
  $('pf-mx').addEventListener('click',closeModal);
  $('pf-mc-save').addEventListener('click',saveToHistory);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal()});
}

function openModal(r){
  ensureModal();curItem=r;
  $('pf-mc-color').style.background=r.hex;
  $('pf-mc-code').textContent='PANTONE\u00AE '+r.code;
  $('pf-mc-name-sm').textContent=r.name;
  $('pf-mc-title').textContent='PANTONE\u00AE '+r.code;
  $('pf-mc-sub').textContent=r.name;
  var cmyk=rgbToCmyk(r.rgb.r,r.rgb.g,r.rgb.b);
  var rows=[
    {l:'HEX',v:r.hex.toUpperCase(),c:r.hex.toUpperCase()},
    {l:'RGB',v:'R '+r.rgb.r+' G '+r.rgb.g+' B '+r.rgb.b,c:'rgb('+r.rgb.r+','+r.rgb.g+','+r.rgb.b+')'},
    {l:'CMYK',v:'C'+cmyk.c+' M'+cmyk.m+' Y'+cmyk.y+' K'+cmyk.k,c:'cmyk('+cmyk.c+'%,'+cmyk.m+'%,'+cmyk.y+'%,'+cmyk.k+'%)'},
    {l:'코드',v:r.code,c:r.code}
  ];
  var cont=$('pf-mc-rows');cont.innerHTML='';
  rows.forEach(function(row){
    var d=document.createElement('div');d.className='pm-row';
    var lbl=document.createElement('span');lbl.className='pm-lbl';lbl.textContent=row.l;
    var val=document.createElement('span');val.className='pm-val';val.textContent=row.v;
    var btn=document.createElement('button');btn.className='pm-copy';btn.textContent='복사';
    btn.addEventListener('click',function(){doCopy(row.c,btn)});
    d.appendChild(lbl);d.appendChild(val);d.appendChild(btn);cont.appendChild(d);
  });
  var sv=$('pf-mc-save');sv.textContent='히스토리에 저장';sv.className='pm-save';
  overlay.classList.add('on');
  document.body.style.overflow='hidden';
}
function closeModal(){if(overlay)overlay.classList.remove('on');curItem=null;document.body.style.overflow=''}

function doCopy(text,btn){
  function done(){btn.textContent='✓';btn.classList.add('ok');setTimeout(function(){btn.textContent='복사';btn.classList.remove('ok')},2000)}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done).catch(function(){fb(text,done)})}
  else{fb(text,done)}
}
function fb(text,done){var ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(ta);done()}

// ── 히스토리 ──
var HK='pfHistory',MAX=50,TTL=7*864e5;
function loadHist(){try{var raw=localStorage.getItem(HK);if(!raw)return[];var items=JSON.parse(raw);var now=Date.now();return items.filter(function(i){return now-i.at<TTL})}catch(e){return[]}}
function saveHist(items){try{localStorage.setItem(HK,JSON.stringify(items))}catch(e){}}

function saveToHistory(){
  if(!curItem)return;
  var r=curItem,items=loadHist();
  if(items.length>=MAX){var w=$('pf-hist-warn');if(w)w.style.display='block';return}
  var cmyk=rgbToCmyk(r.rgb.r,r.rgb.g,r.rgb.b);
  var deduped=items.filter(function(i){return i.code!==r.code});
  deduped.unshift({code:r.code,name:r.name,hex:r.hex,rgb:r.rgb,cmyk:cmyk,dE:r.dE,at:Date.now()});
  saveHist(deduped.slice(0,MAX));
  var btn=$('pf-mc-save');
  btn.textContent='✓ 저장되었습니다';btn.classList.add('saved');
  setTimeout(function(){btn.textContent='히스토리에 저장';btn.classList.remove('saved')},2000);
}

function renderHistory(){
  var items=loadHist(),cont=$('pf-hist-body'),warn=$('pf-hist-warn');
  if(warn)warn.style.display=items.length>=MAX?'block':'none';
  if(items.length===0){cont.innerHTML='<div class="pf-hist-empty"><div class="ei">\uD83C\uDFA8</div><p>아직 저장된 색상이 없습니다.<br>색상을 검색하고 히스토리에 추가해보세요.</p></div>';return}
  var grid=document.createElement('div');grid.className='pf-grid';grid.style.marginTop='0';
  items.forEach(function(item){
    var wrap=document.createElement('div');wrap.className='pf-chip-wrap';
    var del=document.createElement('button');del.className='pf-del-btn';del.textContent='\xD7';
    del.addEventListener('click',function(e){
      e.stopPropagation();wrap.classList.add('rm');
      setTimeout(function(){var it=loadHist().filter(function(i){return i.code!==item.code});saveHist(it);renderHistory()},300);
    });
    var fr={code:item.code,name:item.name,hex:item.hex,rgb:item.rgb,dE:item.dE};
    var chip=makeChip(fr,false);chip.classList.add('show');
    chip.addEventListener('click',function(){openModal(fr)});
    var d=new Date(item.at),dateStr=d.getFullYear()+'.'+String(d.getMonth()+1).padStart(2,'0')+'.'+String(d.getDate()).padStart(2,'0');
    var dt=document.createElement('span');dt.className='pf-chip-date';dt.textContent=dateStr;
    wrap.appendChild(del);wrap.appendChild(chip);wrap.appendChild(dt);grid.appendChild(wrap);
  });
  cont.innerHTML='';cont.appendChild(grid);
}

// ── 이벤트 바인딩 ──
function bind(){
  var app=document.getElementById('pf-app');
  if(!app)return;

  // 내비게이션 탭 - 이벤트 위임 방식으로 변경
  app.addEventListener('click',function(e){
    var navBtn=e.target.closest('.pf-nav-btn');
    if(navBtn){e.preventDefault();e.stopPropagation();switchView(navBtn.getAttribute('data-view'));return;}
    var tab=e.target.closest('.pf-tab');
    if(tab){e.preventDefault();e.stopPropagation();switchTab(tab.getAttribute('data-tab'));return;}
    var sb=e.target.closest('#pf-search-btn');
    if(sb){e.preventDefault();e.stopPropagation();doSearch();return;}
    var rb=e.target.closest('#pf-reset-btn');
    if(rb){e.preventDefault();e.stopPropagation();resetSearch();return;}
    var cb=e.target.closest('#pf-clear-btn');
    if(cb){e.preventDefault();e.stopPropagation();if(confirm('모든 히스토리를 삭제하시겠습니까?')){saveHist([]);renderHistory();}return;}
  });

  // 입력 이벤트
  ['pf-c','pf-m','pf-y','pf-k'].forEach(function(id){var e=$(id);if(e)e.addEventListener('input',function(){syncPrev('cmyk')})});
  ['pf-r','pf-g','pf-b'].forEach(function(id){var e=$(id);if(e)e.addEventListener('input',function(){syncPrev('rgb');var rgb=getRgb();var pk=$('pf-picker');if(pk)pk.value=rgbToHex(rgb.r,rgb.g,rgb.b)})});
  var pk=$('pf-picker');if(pk)pk.addEventListener('input',function(){var rgb=hexToRgb(pk.value);if(!rgb)return;$('pf-r').value=rgb.r;$('pf-g').value=rgb.g;$('pf-b').value=rgb.b;syncPrev('rgb')});
  var hx=$('pf-hex');if(hx)hx.addEventListener('input',function(){syncPrev('hex')});
  ['pf-h','pf-s','pf-l'].forEach(function(id){var e=$(id);if(e)e.addEventListener('input',function(){syncPrev('hsl')})});

  // 초기 미리보기
  syncPrev('cmyk');syncPrev('rgb');syncPrev('hsl');
  // 오래된 히스토리 정리
  saveHist(loadHist());
}

function tryBind(){
  var app=document.getElementById('pf-app');
  if(app){bind();}else{setTimeout(tryBind,100);}
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',tryBind);}else{tryBind();}
})();

