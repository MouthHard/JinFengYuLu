SELECT museum_id,
  JSON_EXTRACT(visit_info, '$.openTime') AS openTime,
  JSON_EXTRACT(visit_info, '$.ticket') AS ticket,
  JSON_EXTRACT(visit_info, '$.transportation.address') AS address,
  JSON_EXTRACT(visit_info, '$.contact.phone') AS phone,
  JSON_EXTRACT(visit_info, '$.contact.website') AS website
FROM museum_detail
WHERE museum_id IN (1, 13, 15, 20, 34)
ORDER BY museum_id;