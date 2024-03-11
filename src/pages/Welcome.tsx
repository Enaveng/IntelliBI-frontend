import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography } from 'antd';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 */
const { Title, Paragraph } = Typography;

const blockContent = `通过我们的智能BI平台，即使对数据分析一无所知的同学也能够轻松完成复杂的数据分析任务，大幅节约人力成本。利用AI接口和自动化技术，我们为您提供了快速、准确和可靠的数据洞察力。立即体验我们的智能BI平台，让数据分析变得简单而智能！`;
const BIIntroduce = `我们引以为傲的亮点是 :
   我们的平台能够以简单的分析需求为基础，自动生成令人惊叹的可视化图表。无需繁琐的编码或复杂的数据处理，您只需输入您的分析需求，我们的智能系统将为您呈现出精美、直观的图表，帮助您快速洞察数据背后的洞见。
   我们的平台不仅提供了多种图表类型，如柱状图、折线图、饼图等，还支持自定义样式和颜色，让您的图表更加个性化。无论您是数据分析新手还是专业人士，我们的平台都能满足您的需求，帮助您轻松展示和分享数据分析结果。
   除了自动生成图表我们的平台还提供了强大的数据处理和分析功能。您可以轻松导入各种数据源，进行数据清洗、转换和计算，以便更好地理解和解释数据。我们还提供了智能建议功能，根据您的数据和分析需求，为您提供优化建议和洞察，帮助您做出更明智的决策。
无论您是企业管理者、市场营销人员还是数据科学家，我们的智能BI项目平台都将成为您的得力助手。让我们一起探索数据的奥秘，发现隐藏在数据背后的故事，为您的业务增添新的活力和竞争力。立即加入我们的平台，开启智能数据分析的新篇章！`;
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'欢迎使用dlwlrma的智能BI平台！'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={1}
          style={{
            textAlign: 'center',
          }}
        >
          <SmileTwoTone style={{ color: '#0015ff' }} /> 智能 BI 平台{' '}
          <HeartTwoTone twoToneColor="#eb2f96" />
        </Typography.Title>
        <Paragraph>
          我们的智能BI平台是一个革命性的数据分析工具，为用户提供了轻松、快速且智能化的数据分析体验。
        </Paragraph>
        <Paragraph style={{ fontWeight: 'bold' }}>
          <pre>{blockContent}</pre>
        </Paragraph>
        <Title level={2}>NGC 智能BI介绍</Title>
        <Paragraph style={{ fontWeight: 'bold' }}>
          <pre>{BIIntroduce}</pre>
        </Paragraph>
        <Title level={2}>NGC 智能BI特点</Title>
        <Paragraph strong>
          1.
          自动化数据分析：项目采用AI技术，能够自动化地从原始数据中生成符合要求的图表和分析结论。用户只需要输入分析目标和原始数据，无需具备专业的数据分析知识，即可完成数据分析的过程。
        </Paragraph>
        <Paragraph strong>
          2.
          节约人力成本：传统的数据分析通常需要数据分析师具备一定的技能和经验，并花费大量的时间进行数据清洗、转化和分析。这个项目的优势在于能够大幅度降低人工数据分析成本，让不具备数据分析能力的用户也能迅速完成数据分析任务，节约了人力资源。
        </Paragraph>
        <Paragraph strong>
          3.
          简化操作流程：该项目提供了图表管理和异步生成的功能，使用户能够更加方便地管理和保存生成的图表，同时异步生成功能也能提升用户的操作效率。
        </Paragraph>
        <Paragraph strong>
          4.
          可视化结果：通过使用AI接口生成分析结果，该项目能够实现将数据以可视化的方式展示出来，使用户更容易理解和解读数据，从而做出更明智的决策。
        </Paragraph>
        <Paragraph strong>
          5.
          适用范围广：由于项目能够从最原始的数据集中进行分析，因此适用于各类行业和领域。用户只需要提供自己的数据和分析目标，即可快速得到相应的分析结果。
        </Paragraph>
        <br />
      </Card>
    </PageContainer>
  );
};

export default Welcome;
