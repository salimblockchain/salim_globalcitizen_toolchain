#!/bin/bash
#
#

jq --version > /dev/null 2>&1
if [ $? -ne 0 ]; then
	echo "Please Install 'jq' https://stedolan.github.io/jq/ to execute this script"
	echo
	exit 1
fi
starttime=$(date +%s)


curl -X GET --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings'


echo
echo
sleep 2
echo
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT1",
  "fromLat": 22.589737,
  "fromLong": 88.453865,
  "toLat": 22.588093,
  "toLong": 88.453683,
  "rpm": 15,
  "pressure": 75,
  "level": 0.75,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT2",
  "fromLat": 22.588093,
  "fromLong": 88.453683,
  "toLat": 22.588357,
  "toLong": 88.450788,
  "rpm": 5,
  "pressure": 95,
  "level": 1.5,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT3",
  "fromLat": 22.588093,
  "fromLong": 88.453683,
  "toLat": 22.587208,
  "toLong": 88.453642,
  "rpm": 12,
  "pressure": 55,
  "level": 0.65,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT4",
  "fromLat": 22.587208,
  "fromLong": 88.453642,
  "toLat": 22.586752,
  "toLong": 88.453578,
  "rpm": 12,
  "pressure": 50,
  "level": 0.5,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT5",
  "fromLat": 22.586752,
  "fromLong": 88.453578,
  "toLat": 22.584870,
  "toLong": 88.453449,
  "rpm": 20,
  "pressure": 75,
  "level": 0.75,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT6",
  "fromLat": 22.584870,
  "fromLong": 88.453449,
  "toLat": 22.584216,
  "toLong": 88.453428,
  "rpm": 5,
  "pressure": 20,
  "level": 0.25,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT7",
  "fromLat": 22.584216,
  "fromLong": 88.453428,
  "toLat": 22.583136,
  "toLong": 88.453353,
  "rpm": 8,
  "pressure": 90,
  "level": 1.25,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT8",
  "fromLat": 22.583136,
  "fromLong": 88.453353,
  "toLat": 22.583024,
  "toLong": 88.450304,
  "rpm": 15,
  "pressure": 90,
  "level": 1.25,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT9",
  "fromLat": 22.584870,
  "fromLong": 88.453449,
  "toLat": 22.585040,
  "toLong": 88.450508,
  "rpm": 18,
  "pressure": 80,
  "level": 1,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT10",
  "fromLat": 22.586752,
  "fromLong": 88.453578,
  "toLat": 22.586932,
  "toLong": 88.450658,
  "rpm": 10,
  "pressure": 70,
  "level": 0.5,
  "radius": 2
}'
echo
echo
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT11",
  "fromLat": 22.584216,
  "fromLong": 88.453428,
  "toLat": 22.583906,
  "toLong": 88.456436,
  "rpm": 19,
  "pressure": 70,
  "level": 29,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2

curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT12",
  "fromLat": 22.587208,
  "fromLong": 88.453642,
  "toLat": 22.586947,
  "toLong": 88.456618,
  "rpm": 13,
  "pressure": 51,
  "level": 47,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT13",
  "fromLat": 22.586947,
  "fromLong": 88.456618,
  "toLat": 22.586839,
  "toLong": 88.458291,
  "rpm": 56,
  "pressure": 65,
  "level": 42,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT14",
  "fromLat": 22.586947,
  "fromLong": 88.456618,
  "toLat": 22.584599,
  "toLong": 88.456468,
  "rpm": 70,
  "pressure": 54,
  "level": 32,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT15",
  "fromLat": 22.584599,
  "fromLong": 88.456468,
  "toLat": 22.583906,
  "toLong": 88.456436,
  "rpm": 77,
  "pressure": 9,
  "level": 75,
  "radius": 2
}'
echo
echo
echo
echo
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT16",
  "fromLat": 22.583906,
  "fromLong": 88.456436,
  "toLat": 22.58376,
  "toLong": 88.457898,
  "rpm": 36,
  "pressure": 99,
  "level": 97,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT17",
  "fromLat": 22.58376,
  "fromLong": 88.457898,
  "toLat": 22.583562,
  "toLong": 88.459802,
  "rpm": 67,
  "pressure": 95,
  "level": 55,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT18",
  "fromLat": 22.583562,
  "fromLong": 88.459802,
  "toLat": 22.584211,
  "toLong": 88.459829,
  "rpm": 68,
  "pressure": 46,
  "level": 70,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT19",
  "fromLat": 22.584211,
  "fromLong": 88.459829,
  "toLat": 22.585979,
  "toLong": 88.460049,
  "rpm": 50,
  "pressure": 86,
  "level": 10,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT20",
  "fromLat": 22.586839,
  "fromLong": 88.458291,
  "toLat": 22.585979,
  "toLong": 88.460049,
  "rpm": 22,
  "pressure": 83,
  "level": 85,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings \
  -H "content-type: application/json" \
  -d '{
  "$class": "org.salim.IotReadings",
  "iotId": "IOT21",
  "fromLat": 22.585979,
  "fromLong": 88.460049,
  "toLat": 22.585667,
  "toLong": 88.461487,
  "rpm": 65,
  "pressure": 48,
  "level": 68,
  "radius": 2
}'
echo
echo
echo
echo
sleep 2
echo
echo
echo "List of Iots"
curl -X GET --header 'Accept: application/json' 'https://composer-rest-server-pipes-network.mybluemix.net/api/IotReadings'


echo "Total execution time : $(($(date +%s)-starttime)) secs ..."
