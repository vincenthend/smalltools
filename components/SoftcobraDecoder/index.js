import React from 'react';
import {Button, Col, Input, message, Row, Space, Spin, Typography} from 'antd'
import {LinkOutlined} from '@ant-design/icons'
import axios from 'axios'


function SoftcobraDecoder(props) {
  const [text, setText] = React.useState()
  const [loading, setLoading] = React.useState(false);
  const [decodedText, setDecodedText] = React.useState();

  const decodeText = React.useCallback(async () => {
    try {
      setLoading(true)
      const resp = await axios({
        method: 'post',
        url: '/api/decode',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: `data=${encodeURIComponent(text)}`
      })
      if (resp.data) {
        setDecodedText(window.atob(resp.data))
      }
    } catch (e) {
      message.error(`Failed to decode: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }, [text])

  return (
    <Row style={{width: '100%'}}>
      <Col span={12} offset={6}>
        <Space direction={'vertical'} style={{width: '100%'}}>
          <Row gutter={8}>
            <Col span={14} offset={4}>
              <Input size={'large'} onChange={(e) => setText(e.target.value)} value={text} allowClear/>
            </Col>
            <Col span={6}>
              <Button size={'large'} type={'primary'} onClick={decodeText} loading={loading}>Decode</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{textAlign: 'center'}}>
              {
                loading ?
                  <Spin /> : (
                    decodedText ?
                      (
                        <>
                          <Typography.Text copyable>{decodedText}</Typography.Text>
                          <Button icon={<LinkOutlined/>} href={decodedText} target={'_blank'} type={'link'}/>
                        </>
                      )
                      : null
                  )
              }
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
}

export default SoftcobraDecoder;