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
