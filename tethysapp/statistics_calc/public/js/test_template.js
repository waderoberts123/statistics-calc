json_data = {
    "dates": ["1962-02-23 00:00:00", "1962-02-24 00:00:00", "1962-02-25 00:00:00", "1962-02-26 00:00:00", "1962-02-27 00:00:00", "1962-02-28 00:00:00", "1962-03-01 00:00:00", "1962-03-02 00:00:00", "1962-03-03 00:00:00", "1962-03-04 00:00:00", "1962-03-05 00:00:00", "1962-03-06 00:00:00", "1962-03-07 00:00:00", "1962-03-08 00:00:00", "1962-03-09 00:00:00", "1962-03-10 00:00:00", "1962-03-11 00:00:00", "1962-03-12 00:00:00", "1962-03-13 00:00:00", "1962-03-14 00:00:00", "1962-03-15 00:00:00", "1962-03-16 00:00:00", "1962-03-17 00:00:00", "1962-03-18 00:00:00", "1962-03-19 00:00:00", "1962-03-20 00:00:00", "1962-03-21 00:00:00", "1962-03-22 00:00:00", "1962-03-23 00:00:00", "1962-03-24 00:00:00", "1962-03-25 00:00:00", "1962-03-26 00:00:00", "1962-03-27 00:00:00", "1962-03-28 00:00:00", "1962-03-29 00:00:00", "1962-03-30 00:00:00", "1962-03-31 00:00:00", "1962-04-01 00:00:00", "1962-04-02 00:00:00", "1962-04-03 00:00:00", "1962-04-04 00:00:00", "1962-04-05 00:00:00", "1962-04-06 00:00:00", "1962-04-07 00:00:00", "1962-04-08 00:00:00", "1962-04-09 00:00:00", "1962-04-10 00:00:00", "1962-04-11 00:00:00", "1962-04-12 00:00:00", "1962-04-13 00:00:00", "1962-04-14 00:00:00", "1962-04-15 00:00:00", "1962-04-16 00:00:00", "1962-04-17 00:00:00", "1962-04-18 00:00:00", "1962-04-19 00:00:00", "1962-04-20 00:00:00", "1962-04-21 00:00:00", "1962-04-22 00:00:00", "1962-04-23 00:00:00", "1962-04-24 00:00:00", "1962-04-25 00:00:00", "1962-04-26 00:00:00", "1962-04-27 00:00:00", "1962-04-28 00:00:00", "1962-04-29 00:00:00", "1962-04-30 00:00:00", "1962-05-01 00:00:00", "1962-05-02 00:00:00", "1962-05-03 00:00:00", "1962-05-04 00:00:00", "1962-05-05 00:00:00", "1962-05-06 00:00:00", "1962-05-07 00:00:00", "1962-05-08 00:00:00", "1962-05-09 00:00:00", "1962-05-10 00:00:00", "1962-05-11 00:00:00", "1962-05-12 00:00:00", "1962-05-13 00:00:00", "1962-05-14 00:00:00", "1962-05-15 00:00:00", "1962-05-16 00:00:00", "1962-05-17 00:00:00", "1962-05-18 00:00:00", "1962-05-19 00:00:00", "1962-05-20 00:00:00", "1962-05-21 00:00:00", "1962-05-22 00:00:00", "1962-05-23 00:00:00", "1962-05-24 00:00:00", "1962-05-25 00:00:00", "1962-05-26 00:00:00", "1962-05-27 00:00:00", "1962-05-28 00:00:00", "1962-05-29 00:00:00", "1962-05-30 00:00:00", "1962-05-31 00:00:00", "1962-06-01 00:00:00", "1962-06-02 00:00:00", "1962-06-03 00:00:00", "1962-06-04 00:00:00", "1962-06-05 00:00:00", "1962-06-06 00:00:00", "1962-06-07 00:00:00", "1962-06-08 00:00:00", "1962-06-09 00:00:00", "1962-06-10 00:00:00", "1962-06-11 00:00:00", "1962-06-12 00:00:00", "1962-06-13 00:00:00", "1962-06-14 00:00:00", "1962-06-15 00:00:00", "1962-06-16 00:00:00", "1962-06-17 00:00:00", "1962-06-18 00:00:00", "1962-06-19 00:00:00", "1962-06-20 00:00:00", "1962-06-21 00:00:00", "1962-06-22 00:00:00", "1962-06-23 00:00:00", "1962-06-24 00:00:00", "1962-06-25 00:00:00", "1962-06-26 00:00:00", "1962-06-27 00:00:00", "1962-06-28 00:00:00", "1962-06-29 00:00:00", "1962-06-30 00:00:00", "1962-07-01 00:00:00", "1962-07-02 00:00:00", "1962-07-03 00:00:00", "1962-07-04 00:00:00", "1962-07-05 00:00:00", "1962-07-06 00:00:00", "1962-07-07 00:00:00", "1962-07-08 00:00:00", "1962-07-09 00:00:00", "1962-07-10 00:00:00", "1962-07-11 00:00:00", "1962-07-12 00:00:00", "1962-07-13 00:00:00", "1962-07-14 00:00:00", "1962-07-15 00:00:00", "1962-07-16 00:00:00", "1962-07-17 00:00:00", "1962-07-18 00:00:00", "1962-07-19 00:00:00", "1962-07-20 00:00:00", "1962-07-21 00:00:00", "1962-07-22 00:00:00", "1962-07-23 00:00:00", "1962-07-24 00:00:00", "1962-07-25 00:00:00", "1962-07-26 00:00:00", "1962-07-27 00:00:00", "1962-07-28 00:00:00", "1962-07-29 00:00:00", "1962-07-30 00:00:00", "1962-07-31 00:00:00", "1962-08-01 00:00:00", "1962-08-02 00:00:00", "1962-08-03 00:00:00", "1962-08-04 00:00:00", "1962-08-05 00:00:00", "1962-08-06 00:00:00", "1962-08-07 00:00:00", "1962-08-08 00:00:00", "1962-08-09 00:00:00", "1962-08-10 00:00:00", "1962-08-11 00:00:00", "1962-08-12 00:00:00", "1962-08-13 00:00:00", "1962-08-14 00:00:00", "1962-08-15 00:00:00", "1962-08-16 00:00:00", "1962-08-17 00:00:00", "1962-08-18 00:00:00", "1962-08-19 00:00:00", "1962-08-20 00:00:00", "1962-08-21 00:00:00", "1962-08-22 00:00:00", "1962-08-23 00:00:00", "1962-08-24 00:00:00", "1962-08-25 00:00:00", "1962-08-26 00:00:00", "1962-08-27 00:00:00", "1962-08-28 00:00:00", "1962-08-29 00:00:00", "1962-08-30 00:00:00", "1962-08-31 00:00:00", "1962-09-01 00:00:00", "1962-09-02 00:00:00", "1962-09-03 00:00:00", "1962-09-04 00:00:00", "1962-09-05 00:00:00", "1962-09-06 00:00:00", "1962-09-07 00:00:00", "1962-09-08 00:00:00", "1962-09-09 00:00:00", "1962-09-10 00:00:00", "1962-09-11 00:00:00", "1962-09-12 00:00:00", "1962-09-13 00:00:00", "1962-09-14 00:00:00", "1962-09-15 00:00:00", "1962-09-16 00:00:00", "1962-09-17 00:00:00", "1962-09-18 00:00:00", "1962-09-19 00:00:00", "1962-09-20 00:00:00", "1962-09-21 00:00:00", "1962-09-22 00:00:00", "1962-09-23 00:00:00", "1962-09-24 00:00:00", "1962-09-25 00:00:00", "1962-09-26 00:00:00", "1962-09-27 00:00:00", "1962-09-28 00:00:00", "1962-09-29 00:00:00", "1962-09-30 00:00:00", "1962-10-01 00:00:00", "1962-10-02 00:00:00", "1962-10-03 00:00:00", "1962-10-04 00:00:00", "1962-10-05 00:00:00", "1962-10-06 00:00:00", "1962-10-07 00:00:00", "1962-10-08 00:00:00", "1962-10-09 00:00:00", "1962-10-10 00:00:00", "1962-10-11 00:00:00", "1962-10-12 00:00:00", "1962-10-13 00:00:00", "1962-10-14 00:00:00", "1962-10-15 00:00:00", "1962-10-16 00:00:00", "1962-10-17 00:00:00", "1962-10-18 00:00:00", "1962-10-19 00:00:00", "1962-10-20 00:00:00", "1962-10-21 00:00:00", "1962-10-22 00:00:00", "1962-10-23 00:00:00", "1962-10-24 00:00:00", "1962-10-25 00:00:00", "1962-10-26 00:00:00", "1962-10-27 00:00:00", "1962-10-28 00:00:00", "1962-10-29 00:00:00", "1962-10-30 00:00:00", "1962-10-31 00:00:00", "1962-11-01 00:00:00", "1962-11-02 00:00:00", "1962-11-03 00:00:00", "1962-11-04 00:00:00", "1962-11-05 00:00:00", "1962-11-06 00:00:00", "1962-11-07 00:00:00", "1962-11-08 00:00:00", "1962-11-09 00:00:00", "1962-11-10 00:00:00", "1962-11-11 00:00:00", "1962-11-12 00:00:00", "1962-11-13 00:00:00", "1962-11-14 00:00:00", "1962-11-15 00:00:00", "1962-11-16 00:00:00", "1962-11-17 00:00:00", "1962-11-18 00:00:00", "1962-11-19 00:00:00", "1962-11-20 00:00:00", "1962-11-21 00:00:00", "1962-11-22 00:00:00", "1962-11-23 00:00:00", "1962-11-24 00:00:00", "1962-11-25 00:00:00", "1962-11-26 00:00:00", "1962-11-27 00:00:00", "1962-11-28 00:00:00", "1962-11-29 00:00:00", "1962-11-30 00:00:00", "1962-12-01 00:00:00", "1962-12-02 00:00:00", "1962-12-03 00:00:00", "1962-12-04 00:00:00", "1962-12-05 00:00:00", "1962-12-06 00:00:00", "1962-12-07 00:00:00", "1962-12-08 00:00:00", "1962-12-09 00:00:00", "1962-12-10 00:00:00", "1962-12-11 00:00:00", "1962-12-12 00:00:00", "1962-12-13 00:00:00", "1962-12-14 00:00:00", "1962-12-15 00:00:00", "1962-12-16 00:00:00", "1962-12-17 00:00:00", "1962-12-18 00:00:00", "1962-12-19 00:00:00", "1962-12-20 00:00:00", "1962-12-21 00:00:00", "1962-12-22 00:00:00", "1962-12-23 00:00:00", "1962-12-24 00:00:00", "1962-12-25 00:00:00", "1962-12-26 00:00:00", "1962-12-27 00:00:00", "1962-12-28 00:00:00", "1962-12-29 00:00:00", "1962-12-30 00:00:00", "1962-12-31 00:00:00", "1963-01-01 00:00:00", "1963-01-02 00:00:00", "1963-01-03 00:00:00", "1963-01-04 00:00:00", "1963-01-05 00:00:00", "1963-01-06 00:00:00", "1963-01-07 00:00:00", "1963-01-08 00:00:00", "1963-01-09 00:00:00", "1963-01-10 00:00:00", "1963-01-11 00:00:00", "1963-01-12 00:00:00", "1963-01-13 00:00:00", "1963-01-14 00:00:00", "1963-01-15 00:00:00", "1963-01-16 00:00:00", "1963-01-17 00:00:00", "1963-01-18 00:00:00", "1963-01-19 00:00:00", "1963-01-20 00:00:00", "1963-01-21 00:00:00", "1963-01-22 00:00:00", "1963-01-23 00:00:00", "1963-01-24 00:00:00", "1963-01-25 00:00:00", "1963-01-26 00:00:00", "1963-01-27 00:00:00", "1963-01-28 00:00:00", "1963-01-29 00:00:00", "1963-01-30 00:00:00", "1963-01-31 00:00:00", "1963-02-01 00:00:00", "1963-02-02 00:00:00", "1963-02-03 00:00:00", "1963-02-04 00:00:00", "1963-02-05 00:00:00", "1963-02-06 00:00:00", "1963-02-07 00:00:00", "1963-02-08 00:00:00", "1963-02-09 00:00:00", "1963-02-10 00:00:00", "1963-02-11 00:00:00", "1963-02-12 00:00:00", "1963-02-13 00:00:00", "1963-02-14 00:00:00", "1963-02-15 00:00:00", "1963-02-16 00:00:00", "1963-02-17 00:00:00", "1963-02-18 00:00:00", "1963-02-19 00:00:00", "1963-02-20 00:00:00", "1963-02-21 00:00:00", "1963-02-22 00:00:00", "1963-02-23 00:00:00", "1963-02-24 00:00:00", "1963-02-25 00:00:00", "1963-02-26 00:00:00", "1963-02-27 00:00:00", "1963-02-28 00:00:00", "1963-03-01 00:00:00", "1963-03-02 00:00:00", "1963-03-03 00:00:00", "1963-03-04 00:00:00", "1963-03-05 00:00:00", "1963-03-06 00:00:00", "1963-03-07 00:00:00", "1963-03-08 00:00:00", "1963-03-09 00:00:00", "1963-03-10 00:00:00", "1963-03-11 00:00:00", "1963-03-12 00:00:00", "1963-03-13 00:00:00", "1963-03-14 00:00:00", "1963-03-15 00:00:00", "1963-03-16 00:00:00", "1963-03-17 00:00:00", "1963-03-18 00:00:00", "1963-03-19 00:00:00", "1963-03-20 00:00:00", "1963-03-21 00:00:00", "1963-03-22 00:00:00", "1963-03-23 00:00:00", "1963-03-24 00:00:00", "1963-03-25 00:00:00", "1963-03-26 00:00:00", "1963-03-27 00:00:00", "1963-03-28 00:00:00", "1963-03-29 00:00:00", "1963-03-30 00:00:00", "1963-03-31 00:00:00", "1963-04-01 00:00:00", "1963-04-02 00:00:00", "1963-04-03 00:00:00", "1963-04-04 00:00:00", "1963-04-05 00:00:00", "1963-04-06 00:00:00", "1963-04-07 00:00:00", "1963-04-08 00:00:00", "1963-04-09 00:00:00", "1963-04-10 00:00:00", "1963-04-11 00:00:00", "1963-04-12 00:00:00", "1963-04-13 00:00:00", "1963-04-14 00:00:00", "1963-04-15 00:00:00", "1963-04-16 00:00:00", "1963-04-17 00:00:00", "1963-04-18 00:00:00", "1963-04-19 00:00:00", "1963-04-20 00:00:00", "1963-04-21 00:00:00", "1963-04-22 00:00:00", "1963-04-23 00:00:00", "1963-04-24 00:00:00", "1963-04-25 00:00:00", "1963-04-26 00:00:00", "1963-04-27 00:00:00", "1963-04-28 00:00:00", "1963-04-29 00:00:00", "1963-04-30 00:00:00", "1963-05-01 00:00:00", "1963-05-02 00:00:00", "1963-05-03 00:00:00", "1963-05-04 00:00:00", "1963-05-05 00:00:00", "1963-05-06 00:00:00", "1963-05-07 00:00:00", "1963-05-08 00:00:00", "1963-05-09 00:00:00", "1963-05-10 00:00:00", "1963-05-11 00:00:00", "1963-05-12 00:00:00", "1963-05-13 00:00:00", "1963-05-14 00:00:00", "1963-05-15 00:00:00", "1963-05-16 00:00:00", "1963-05-17 00:00:00", "1963-05-18 00:00:00", "1963-05-19 00:00:00", "1963-05-20 00:00:00", "1963-05-21 00:00:00", "1963-05-22 00:00:00", "1963-05-23 00:00:00", "1963-05-24 00:00:00", "1963-05-25 00:00:00", "1963-05-26 00:00:00", "1963-05-27 00:00:00", "1963-05-28 00:00:00", "1963-05-29 00:00:00", "1963-05-30 00:00:00", "1963-05-31 00:00:00", "1963-06-01 00:00:00", "1963-06-02 00:00:00", "1963-06-03 00:00:00", "1963-06-04 00:00:00", "1963-06-05 00:00:00", "1963-06-06 00:00:00", "1963-06-07 00:00:00", "1963-06-08 00:00:00", "1963-06-09 00:00:00", "1963-06-10 00:00:00", "1963-06-11 00:00:00", "1963-06-12 00:00:00", "1963-06-13 00:00:00", "1963-06-14 00:00:00", "1963-06-15 00:00:00", "1963-06-16 00:00:00", "1963-06-17 00:00:00", "1963-06-18 00:00:00", "1963-06-19 00:00:00", "1963-06-20 00:00:00", "1963-06-21 00:00:00", "1963-06-22 00:00:00", "1963-06-23 00:00:00", "1963-06-24 00:00:00", "1963-06-25 00:00:00", "1963-06-26 00:00:00", "1963-06-27 00:00:00", "1963-06-28 00:00:00", "1963-06-29 00:00:00", "1963-06-30 00:00:00", "1963-07-01 00:00:00", "1963-07-02 00:00:00", "1963-07-03 00:00:00", "1963-07-04 00:00:00", "1963-07-05 00:00:00", "1963-07-06 00:00:00", "1963-07-07 00:00:00"],
    "data": ["160.0", "163.0", "178.0", "169.0", "169.0", "169.0", "169.0", "163.0", "160.0", "158.0", "195.0", "231.0", "202.0", "198.0", "195.0", "192.0", "192.0", "189.0", "189.0", "186.0", "192.0", "192.0", "192.0", "192.0", "192.0", "189.0", "189.0", "186.0", "183.0", "183.0", "186.0", "189.0", "189.0", "192.0", "195.0", "202.0", "205.0", "205.0", "205.0", "198.0", "189.0", "180.0", "192.0", "195.0", "192.0", "195.0", "192.0", "195.0", "189.0", "186.0", "198.0", "205.0", "211.0", "205.0", "208.0", "214.0", "238.0", "238.0", "277.0", "269.0", "315.0", "361.0", "361.0", "410.0", "434.0", "419.0", "387.0", "458.0", "467.0", "410.0", "396.0", "365.0", "335.0", "311.0", "291.0", "284.0", "273.0", "269.0", "265.0", "262.0", "269.0", "280.0", "295.0", "315.0", "311.0", "284.0", "277.0", "303.0", "319.0", "323.0", "357.0", "365.0", "365.0", "365.0", "387.0", "419.0", "415.0", "438.0", "472.0", "462.0", "415.0", "392.0", "467.0", "508.0", "566.0", "640.0", "813.0", "981.0", "1031.0", "1004.0", "1052.0", "1059.0", "1152.0", "1171.0", "877.0", "807.0", "774.0", "915.0", "1024.0", "1202.0", "1285.0", "1364.0", "1380.0", "1343.0", "1301.0", "1253.0", "1207.0", "1152.0", "975.0", "952.0", "946.0", "946.0", "1045.0", "1152.0", "1253.0", "1217.0", "1104.0", "1052.0", "946.0", "1104.0", "1045.0", "934.0", "1301.0", "1473.0", "1489.0", "3031.0", "1359.0", "1311.0", "1238.0", "1196.0", "1122.0", "1159.0", "1264.0", "1364.0", "1811.0", "2094.0", "1805.0", "1805.0", "1847.0", "2013.0", "2587.0", "2338.0", "2196.0", "2088.0", "2031.0", "1969.0", "1859.0", "1799.0", "1688.0", "1568.0", "1847.0", "1829.0", "1793.0", "1902.0", "2075.0", "2138.0", "1994.0", "1944.0", "1877.0", "1776.0", "1423.0", "1354.0", "1343.0", "1573.0", "1729.0", "1883.0", "1642.0", "1551.0", "1495.0", "1694.0", "1311.0", "1228.0", "1217.0", "1165.0", "1228.0", "1258.0", "1228.0", "1159.0", "1183.0", "1258.0", "1159.0", "1110.0", "1092.0", "1177.0", "1122.0", "1165.0", "1264.0", "1134.0", "1700.0", "1829.0", "1642.0", "1859.0", "1938.0", "1648.0", "1423.0", "1222.0", "1128.0", "1038.0", "981.0", "969.0", "755.0", "800.0", "687.0", "675.0", "652.0", "634.0", "628.0", "611.0", "588.0", "577.0", "555.0", "539.0", "518.0", "503.0", "492.0", "467.0", "453.0", "448.0", "434.0", "429.0", "415.0", "406.0", "392.0", "369.0", "357.0", "344.0", "335.0", "327.0", "311.0", "311.0", "307.0", "307.0", "307.0", "303.0", "303.0", "299.0", "295.0", "291.0", "288.0", "280.0", "273.0", "269.0", "265.0", "265.0", "262.0", "258.0", "255.0", "255.0", "251.0", "248.0", "244.0", "241.0", "238.0", "234.0", "231.0", "227.0", "224.0", "221.0", "218.0", "218.0", "214.0", "214.0", "211.0", "211.0", "208.0", "205.0", "205.0", "202.0", "202.0", "198.0", "198.0", "195.0", "192.0", "192.0", "189.0", "186.0", "183.0", "183.0", "180.0", "180.0", "178.0", "175.0", "175.0", "172.0", "169.0", "169.0", "169.0", "166.0", "166.0", "163.0", "163.0", "163.0", "160.0", "158.0", "156.0", "156.0", "153.0", "153.0", "152.0", "150.0", "150.0", "147.0", "147.0", "145.0", "144.0", "144.0", "142.0", "142.0", "142.0", "142.0", "139.0", "139.0", "139.0", "139.0", "137.0", "137.0", "137.0", "135.0", "132.0", "132.0", "132.0", "130.0", "130.0", "130.0", "130.0", "128.0", "128.0", "127.0", "126.0", "126.0", "126.0", "126.0", "124.0", "124.0", "124.0", "124.0", "123.0", "122.0", "122.0", "124.0", "124.0", "124.0", "121.0", "120.0", "120.0", "120.0", "118.0", "118.0", "118.0", "117.0", "117.0", "117.0", "117.0", "117.0", "117.0", "117.0", "117.0", "117.0", "117.0", "119.0", "325.0", "197.0", "164.0", "144.0", "139.0", "143.0", "143.0", "139.0", "137.0", "137.0", "137.0", "140.0", "143.0", "145.0", "150.0", "195.0", "176.0", "144.0", "144.0", "185.0", "185.0", "182.0", "178.0", "185.0", "185.0", "174.0", "176.0", "185.0", "176.0", "180.0", "176.0", "176.0", "168.0", "182.0", "205.0", "219.0", "257.0", "259.0", "257.0", "263.0", "255.0", "223.0", "215.0", "223.0", "217.0", "223.0", "215.0", "219.0", "235.0", "275.0", "323.0", "311.0", "301.0", "278.0", "293.0", "336.0", "340.0", "430.0", "453.0", "485.0", "498.0", "451.0", "455.0", "413.0", "379.0", "435.0", "415.0", "418.0", "411.0", "338.0", "321.0", "438.0", "413.0", "338.0", "295.0", "313.0", "360.0", "358.0", "383.0", "415.0", "449.0", "525.0", "576.0", "663.0", "649.0", "601.0", "635.0", "696.0", "779.0", "683.0", "746.0", "955.0", "768.0", "715.0", "663.0", "565.0", "719.0", "924.0", "841.0", "776.0", "776.0", "927.0", "1006.0", "890.0", "720.0", "635.0", "624.0", "603.0", "671.0", "900.0", "1009.0", "950.0", "865.0", "804.0", "775.0", "832.0", "891.0", "852.0", "804.0", "983.0"]
};


function plot() {
    let data = [
        {
            x: json_data["dates"],
            y: json_data['data'],
            type: "scatter"
        }
    ];

    Plotly.newPlot("myDiv", data);
}

function clearPlot() {
    $("#myDiv").empty();
}

function makeCSV() {
    let graphDiv = document.getElementById('myDiv');
    let data = graphDiv.data[0];
    let x_data = data['x'];
    let y_data = data['y'];

    let csvContent = "data:text/csv;charset=utf-8,Datetime,Observed Data\n";
    let row;

    for (let i = 0; i < x_data.length; i++) {
        row = `${x_data[i]},${y_data[i]}\n`;
        csvContent += row
    }
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    link.innerHTML = "";
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".

}