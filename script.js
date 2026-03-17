// AI营销增长服务 - 专业优化版本

// 专业咨询功能
function contactUs(service) {
    const serviceNames = {
        '基础套餐': '基础增长套餐 ($499/月)',
        '专业套餐': '专业增长套餐 ($999/月)',
        '企业套餐': '企业增长套餐 ($1999/月)',
        '咨询': '专业咨询'
    };
    
    const serviceName = serviceNames[service] || service;
    
    // 创建专业咨询表单
    const formHtml = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; backdrop-filter: blur(5px);">
            <div style="background: white; padding: 50px; border-radius: 25px; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 30px 80px rgba(0,0,0,0.2); border: 1px solid #e5e7eb;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h2 style="color: #111827; font-size: 1.8rem; margin: 0;">📞 专业咨询</h2>
                    <button onclick="closeConsultation()" style="background: none; border: none; font-size: 1.5rem; color: #6b7280; cursor: pointer; padding: 5px 10px;">×</button>
                </div>
                
                <p style="color: #6b7280; margin-bottom: 30px; line-height: 1.6;">
                    请填写以下信息，我们的专业顾问将在24小时内联系您，提供定制化增长方案。
                </p>
                
                <div style="margin-bottom: 25px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">姓名 *</label>
                    <input type="text" id="consultName" style="width: 100%; padding: 15px; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem; transition: all 0.3s;" placeholder="请输入您的姓名" required>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">公司/业务 *</label>
                    <input type="text" id="consultCompany" style="width: 100%; padding: 15px; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem;" placeholder="请输入公司名称或业务类型" required>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">邮箱 *</label>
                    <input type="email" id="consultEmail" style="width: 100%; padding: 15px; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem;" placeholder="请输入联系邮箱" required>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">当前月收入</label>
                    <select id="consultRevenue" style="width: 100%; padding: 15px; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem;">
                        <option value="">请选择收入范围</option>
                        <option value="under10k">$1万以下</option>
                        <option value="10k-50k">$1万-$5万</option>
                        <option value="50k-200k">$5万-$20万</option>
                        <option value="200k+">$20万以上</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">感兴趣的服务</label>
                    <input type="text" id="consultService" style="width: 100%; padding: 15px; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem;" value="${serviceName}" readonly>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">业务现状与目标 *</label>
                    <textarea id="consultGoals" style="width: 100%; padding: 15px; border: 2px solid #e5e7eb; border-radius: 10px; font-size: 1rem; min-height: 120px; resize: vertical;" placeholder="请描述您的业务现状、当前面临的挑战、以及希望通过我们的服务实现的具体目标..." required></textarea>
                </div>
                
                <div style="display: flex; gap: 15px;">
                    <button onclick="submitProfessionalConsultation('${service}')" style="flex: 1; padding: 18px; background: #1a56db; color: white; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; font-size: 1rem; transition: all 0.3s;">
                        🚀 提交专业咨询
                    </button>
                    <button onclick="closeConsultation()" style="flex: 1; padding: 18px; background: #f3f4f6; color: #374151; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; font-size: 1rem; transition: all 0.3s;">
                        取消
                    </button>
                </div>
                
                <p style="color: #9ca3af; font-size: 0.9rem; margin-top: 25px; text-align: center;">
                    提交后24小时内，我们的专业顾问将通过邮箱联系您。
                </p>
            </div>
        </div>
    `;
    
    // 添加到页面
    const modal = document.createElement('div');
    modal.innerHTML = formHtml;
    modal.id = 'professionalConsultationModal';
    document.body.appendChild(modal);
    
    // 设置示例数据
    setTimeout(() => {
        document.getElementById('consultName').value = '张先生';
        document.getElementById('consultCompany').value = service.includes('企业') ? '科技公司' : 
                                                         service.includes('专业') ? '电商品牌' : '初创企业';
        document.getElementById('consultEmail').value = 'contact@company.com';
        document.getElementById('consultRevenue').value = service.includes('企业') ? '200k+' : 
                                                         service.includes('专业') ? '50k-200k' : '10k-50k';
        document.getElementById('consultGoals').value = `我对${serviceName}感兴趣。\n\n当前业务现状：月收入约${service.includes('企业') ? '$25万' : service.includes('专业') ? '$12万' : '$3万'}，面临增长瓶颈。\n\n主要挑战：${service.includes('企业') ? '需要全渠道营销管理和数据驱动决策' : service.includes('专业') ? '内容创作效率低，社交媒体管理困难' : '缺乏专业营销团队，获客成本高'}。\n\n目标：希望在3个月内实现${service.includes('企业') ? 'ROI > 3:1' : service.includes('专业') ? '收入增长25%' : '流量增长30%'}。`;
    }, 100);
}

// 提交专业咨询
function submitProfessionalConsultation(service) {
    const name = document.getElementById('consultName').value.trim();
    const company = document.getElementById('consultCompany').value.trim();
    const email = document.getElementById('consultEmail').value.trim();
    const revenue = document.getElementById('consultRevenue').value;
    const goals = document.getElementById('consultGoals').value.trim();
    
    if (!name || !company || !email || !goals) {
        alert('请填写所有必填字段！');
        return;
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('请输入有效的邮箱地址！');
        return;
    }
    
    // 收集数据
    const consultationData = {
        service: service,
        name: name,
        company: company,
        email: email,
        revenue: getRevenueText(revenue),
        goals: goals,
        timestamp: new Date().toISOString(),
        source: 'AI营销增长服务专业版',
        status: 'pending_professional_review'
    };
    
    // 显示专业成功消息
    closeConsultation();
    
    const successHtml = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; backdrop-filter: blur(5px);">
            <div style="background: white; padding: 50px; border-radius: 25px; max-width: 500px; width: 90%; text-align: center; box-shadow: 0 30px 80px rgba(0,0,0,0.2);">
                <div style="font-size: 4rem; margin-bottom: 25px; color: #059669;">✅</div>
                <h2 style="margin-bottom: 20px; color: #111827; font-size: 1.8rem;">专业咨询提交成功！</h2>
                <p style="margin-bottom: 25px; color: #4b5563; line-height: 1.6;">
                    感谢您的信任。我们的专业顾问团队已收到您的咨询信息，将在24小时内通过邮箱联系您，提供定制化增长方案。
                </p>
                
                <div style="background: #f0f9ff; padding: 25px; border-radius: 15px; margin-bottom: 30px; text-align: left;">
                    <h3 style="color: #0369a1; margin-bottom: 15px; font-size: 1.1rem;">📋 下一步安排：</h3>
                    <ul style="color: #374151; padding-left: 20px; line-height: 1.6;">
                        <li style="margin-bottom: 8px;">1. 专业顾问分析您的需求</li>
                        <li style="margin-bottom: 8px;">2. 准备初步增长方案</li>
                        <li style="margin-bottom: 8px;">3. 安排30分钟视频会议</li>
                        <li style="margin-bottom: 8px;">4. 提供详细服务建议</li>
                    </ul>
                </div>
                
                <div style="background: #f0fdf4; padding: 25px; border-radius: 15px; margin-bottom: 30px; text-align: left;">
                    <h3 style="color: #047857; margin-bottom: 15px; font-size: 1.1rem;">📞 其他联系方式：</h3>
                    <ul style="color: #374151; padding-left: 20px; line-height: 1.6;">
                        <li style="margin-bottom: 8px;">微信：openclaw-ai（专业顾问）</li>
                        <li style="margin-bottom: 8px;">邮箱：fengyuan521314@126.com</li>
                        <li style="margin-bottom: 8px;">飞书：本群聊直接@opcl</li>
                    </ul>
                </div>
                
                <button onclick="closeSuccessMessage()" style="padding: 16px 50px; background: #1a56db; color: white; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; font-size: 1rem; transition: all 0.3s;">
                    确定
                </button>
            </div>
        </div>
    `;
    
    const successModal = document.createElement('div');
    successModal.innerHTML = successHtml;
    successModal.id = 'professionalSuccessModal';
    document.body.appendChild(successModal);
    
    // 记录到控制台（实际应该发送到服务器）
    console.log('专业咨询提交:', consultationData);
    
    // 模拟发送专业通知
    simulateProfessionalNotification(consultationData);
}

// 获取收入范围文本
function getRevenueText(value) {
    const revenues = {
        'under10k': '$1万以下',
        '10k-50k': '$1万-$5万',
        '50k-200k': '$5万-$20万',
        '200k+': '$20万以上'
    };
    return revenues[value] || '未选择';
}

// 模拟发送专业通知
function simulateProfessionalNotification(data) {
    const serviceNames = {
        '基础套餐': '基础增长套餐',
        '专业套餐': '专业增长套餐',
        '企业套餐': '企业增长套餐',
        '咨询': '专业咨询'
    };
    
    const message = `🎯 新专业咨询提交！
    
服务意向：${serviceNames[data.service] || data.service}
客户姓名：${data.name}
公司名称：${data.company}
客户邮箱：${data.email}
当前收入：${data.revenue}
业务目标：${data.goals}

提交时间：${new Date(data.timestamp).toLocaleString()}

💼 专业处理建议：
1. 24小时内回复专业咨询邮件
2. 准备初步增长方案
3. 安排30分钟视频会议
4. 提供详细服务建议
5. 准备合同模板

📊 客户分类：${data.revenue.includes('20万') ? '高价值客户' : data.revenue.includes('5万') ? '中价值客户' : '潜力客户'}

⏰ 跟进优先级：${data.revenue.includes('20万') ? '高' : data.revenue.includes('5万') ? '中' : '标准'}`;

    console.log('📨 发送专业通知：\n', message);
    
    // 在实际应用中，这里应该调用专业CRM系统
    // 暂时用控制台输出
    console.log('✅ 专业咨询已进入处理流程');
}

// ROI计算器
function calculateROI() {
    const revenue = prompt('请输入您当前的月收入（美元）：', '50000');
    const growthTarget = prompt('请输入您希望实现的月收入增长目标（%）：', '25');
    
    if (!revenue || !growthTarget) return;
    
    const revenueNum = parseFloat(revenue);
    const growthNum = parseFloat(growthTarget);
    
    if (isNaN(revenueNum) || isNaN(growthNum)) {
        alert('请输入有效的数字！');
        return;
    }
    
    // 计算预期增长
    const expectedGrowth = revenueNum * (growthNum / 100);
    const totalRevenue = revenueNum + expectedGrowth;
    
    // 推荐服务
    let recommendedService, servicePrice, expectedROI;
    
    if (revenueNum < 10000) {
        recommendedService = '基础增长套餐';
        servicePrice = 499;
        expectedROI = (expectedGrowth / servicePrice).toFixed(1);
    } else if (revenueNum < 50000) {
        recommendedService = '专业增长套餐';
        servicePrice = 999;
        expectedROI = (expectedGrowth / servicePrice).toFixed(1);
    } else {
        recommendedService = '企业增长套餐';
        servicePrice = 1999;
        expectedROI = (expectedGrowth / servicePrice).toFixed(1);
    }
    
    const resultHtml = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; backdrop-filter: blur(5px);">
            <div style="background: white; padding: 50px; border-radius: 25px; max-width: 600px; width: 90%; box-shadow: 0 30px 80px rgba(0,0,0,0.2);">
                <h2 style="margin-bottom: 30px; color: #111827; text-align: center; font-size: 1.8rem;">📊 专业ROI分析报告</h2>
                
                <div style="background: #f0f9ff; padding: 25px; border-radius: 15px; margin-bottom: 25px;">
                    <h3 style="color: #0369a1; margin-bottom: 15px; font-size: 1.1rem;">📈 当前情况分析</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <div style="color: #6b7280; font-size: 0.9rem;">当前月收入</div>
                            <div style="font-size: 1.5rem; font-weight: 700; color: #111827;">$${revenueNum.toLocaleString()}</div>
                        </div>
                        <div>
                            <div style="color: #6b7280; font-size: 0.9rem;">增长目标</div>
                            <div style="font-size: 1.5rem; font-weight: 700; color: