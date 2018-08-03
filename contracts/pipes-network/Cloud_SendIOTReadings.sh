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
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT1",
      "rpm": 15,
      "pressure": 90,
      "level": 1.25
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT2",
      "rpm": 10,
      "pressure": 90,
      "level": 1.25
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT3",
      "rpm": 10,
      "pressure": 90,
      "level": 3
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT4",
      "rpm": 10,
      "pressure": 90,
      "level": 3
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT5",
      "rpm": 10,
      "pressure": 90,
      "level": 10
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT6",
      "rpm": 10,
      "pressure": 10,
      "level": 8.9
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT7",
      "rpm": 5,
      "pressure": 1,
      "level": 5
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT8",
      "rpm": 50,
      "pressure": 1,
      "level": 5
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT9",
      "rpm": 1,
      "pressure": 1,
      "level": 5
}'
echo
echo
echo
echo
sleep 2
curl -s -X POST \
  https://composer-rest-server-pipes-network.mybluemix.net/api/SendIotReading \
  -H "content-type: application/json" \
  -d '{
      "$class": "org.salim.SendIotReading",
      "iotIdObj": "resource:org.salim.IotReadings#IOT10",
      "rpm": 15,
      "pressure": 1,
      "level": 50
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
