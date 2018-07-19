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


curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/IotReadings'


echo
echo
sleep 2
echo
curl -s -X POST \
  http://localhost:3000/api/IotReadings \
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
  http://localhost:3000/api/IotReadings \
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
  http://localhost:3000/api/IotReadings \
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
  http://localhost:3000/api/IotReadings \
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
  http://localhost:3000/api/IotReadings \
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
  http://localhost:3000/api/IotReadings \
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
  http://localhost:3000/api/IotReadings \
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
  http://localhost:3000/api/IotReadings \
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
  http://localhost:3000/api/IotReadings \
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
  http://localhost:3000/api/IotReadings \
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
sleep 2
echo
echo
echo "List of Iots"
curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/IotReadings'


echo "Total execution time : $(($(date +%s)-starttime)) secs ..."
