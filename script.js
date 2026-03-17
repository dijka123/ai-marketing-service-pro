// AI营销增长服务 - 专业修复版本

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 AI营销增长服务 - 专业版本已加载');
    
    // 添加滚动动画
    initScrollAnimations();
    
    // 绑定所有按钮点击事件
    bindButtonEvents();
    
    // 设置示例数据（方便测试）
    setupExampleData();
});

// 初始化滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// 绑定所有按钮点击事件
function bindButtonEvents() {
    // 专业咨询按钮
    document.querySelectorAll('[onclick*="openConsultation"]').forEach(btn => {
        const match = btn.getAttribute('onclick').match(/openConsultation\('([^']+)'\)/);
        if (match) {
            btn.onclick = () => openConsultation(match[1]);
        }
    });
    
    // ROI计算按钮
    document.querySelectorAll('[onclick*="calculateROI"]').forEach(btn => {
        btn.onclick = calculateROI;
    });
    
    // 立即签约按钮
    document.querySelectorAll('[onclick*="signUpNow"]').forEach(btn => {
        const match = btn.getAttribute('onclick').match(/signUpNow\('([^']+)'\)/);
        if (match) {
            btn.onclick = () => signUpNow(match[1]);
        }
    });
    
    // 定制方案按钮
    document.querySelectorAll('[onclick*="customSolution"]').forEach(btn => {
        btn.onclick = customSolution;
    });
    
    console.log('✅ 所有按钮事件已绑定');
}

// 设置示例数据
function setupExampleData() {
    // 这里可以设置一些示例数据，方便测试
    console.log('📊 示例数据已设置');
}

// 打开专业咨询表单
function openConsultation(service) {
    console.log('📞 打开专业咨询:', service);
    
    const serviceNames = {
        '基础套餐': '基础增长套餐 ($499/月)',
        '专业套餐': '专业增长套餐 ($999/月)',
        '企业套餐': '企业增长套餐 ($1999/月)',
        '咨询': '专业咨询'
    };
    
    const serviceName = serviceNames[service] || service;
    
    // 创建专业咨询模态框
    const modalHtml = `
        <div class="consultation-modal" id="consultationModal">
            <div class="modal-overlay" onclick="closeConsultation()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-comments"></i> 专业咨询 - ${serviceName}</h3>
                    <button class="modal-close" onclick="closeConsultation()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="modal-body">
                    <p style="color: #6b7280; margin-bottom: 24px; line-height: 1.6;">
                        请填写以下信息，我们的专业顾问将在24小时内联系您，提供定制化增长方案。
                    </p>
                    
                    <div class="form-group">
                        <label for="consultName">姓名 *</label>
                        <input type="text" id="consultName" placeholder="请输入您的姓名" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="consultCompany">公司/业务 *</label>
                        <input type="text" id="consultCompany" placeholder="请输入公司名称或业务类型" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="consultEmail">邮箱 *</label>
                        <input type="email" id="consultEmail" placeholder="请输入联系邮箱" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="consultRevenue">当前月收入</label>
                        <select id="consultRevenue">
                            <option value="">请选择收入范围</option>
                            <option value="under10k">$1万以下</option>
                            <option value="10k-50k">$1万-$5万</option>
                            <option value="50k-200k">$5万-$20万</option>
                            <option value="200k+">$20万以上</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="consultGoals">业务现状与目标 *</label>
                        <textarea id="consultGoals" placeholder="请描述您的业务现状、当前面临的挑战、以及希望通过我们的服务实现的具体目标..." rows="4" required></textarea>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeConsultation()">
                        <i class="fas fa-times"></i> 取消
                    </button>
                    <button class="btn btn-primary" onclick="submitConsultation('${service}')">
                        <i class="fas fa-paper-plane"></i> 提交咨询
                    </button>
                </div>
            </div>
        </div>
        
        <style>
            .consultation-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
            }
            
            .modal-content {
                position: relative;
                background: white;
                border-radius: 20px;
                width: 90%;
                max-width: 500px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
                animation: slideUp 0.4s ease;
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .modal-header {
                padding: 24px 32px;
                border-bottom: 1px solid #e5e7eb;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modal-header h3 {
                margin: 0;
                color: #111827;
                font-size: 1.5rem;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #6b7280;
                cursor: pointer;
                padding: 8px;
                border-radius: 8px;
                transition: all 0.2s;
            }
            
            .modal-close:hover {
                background: #f3f4f6;
                color: #111827;
            }
            
            .modal-body {
                padding: 32px;
            }
            
            .form-group {
                margin-bottom: 24px;
            }
            
            .form-group label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #374151;
                font-size: 0.95rem;
            }
            
            .form-group input,
            .form-group select,
            .form-group textarea {
                width: 100%;
                padding: 14px 16px;
                border: 2px solid #e5e7eb;
                border-radius: 12px;
                font-size: 1rem;
                transition: all 0.3s;
                font-family: inherit;
            }
            
            .form-group input:focus,
            .form-group select:focus,
            .form-group textarea:focus {
                outline: none;
                border-color: #2563eb;
                box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            }
            
            .modal-footer {
                padding: 24px 32px;
                border-top: 1px solid #e5e7eb;
                display: flex;
                gap: 16px;
            }
            
            .modal-footer .btn {
                flex: 1;
                padding: 16px;
                font-size: 1rem;
            }
            
            .btn-secondary {
                background: #f3f4f6;
                color: #374151;
                border: none;
                border-radius: 12px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            
            .btn-secondary:hover {
                background: #e5e7eb;
            }
        </style>
    `;
    
    // 添加到页面
    const modal = document.createElement('div');
    modal.innerHTML = modalHtml;
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

// 关闭咨询表单
function closeConsultation() {
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.remove();
    }
}

// 提交咨询
function submitConsultation(service) {
    const name = document.getElementById('consultName').value.trim();
    const company = document.getElementById('consultCompany').value.trim();
    const email = document.getElementById('consultEmail').value.trim();
    const revenue = document.getElementById('consultRevenue').value;
    const goals = document.getElementById('consultGoals').value.trim();
    
    // 验证必填字段
    if (!name || !company || !email || !goals) {
        showNotification('请填写所有必填字段！', 'error');
        return;
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('请输入有效的邮箱地址！', 'error');
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
        timestamp: new Date().toISOString()
    };
    
    console.log('📨 提交咨询:', consultationData);
    
    // 关闭模态框
    closeConsultation();
    
    // 显示成功消息
    showNotification('✅ 咨询提交成功！我们的专业顾问将在24小时内联系您。', 'success');
    
    // 模拟发送到服务器
    setTimeout(() => {
        console.log('📤 咨询数据已发送到服务器');
    }, 1000);
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

// 立即签约
function signUpNow(service) {
    console.log('📝 立即签约:', service);
    
    const serviceNames = {
        '基础套餐': '基础增长套餐',
        '专业套餐': '专业增长套餐',
        '企业套餐': '企业增长套餐'
    };
    
    const serviceName = serviceNames[service] || service;
    
    showNotification(`🚀 即将跳转到${serviceName}签约页面...`, 'info');
    
    // 在实际应用中，这里应该跳转到支付页面
    // 暂时用咨询表单替代
    setTimeout(() => {
        openConsultation(service);
    }, 1500);
}

// 定制方案
function customSolution() {
    console.log('🎨 定制方案');
    
    showNotification('📞 我们的专业顾问将为您提供定制化解决方案，请填写咨询表单。', 'info');
    
    setTimeout(() => {
        openConsultation('咨询');
    }, 1500);
}

// ROI计算器
function calculateROI() {
    console.log('📊 计算ROI');
    
    // 在实际应用中，这里应该打开ROI计算器
    // 暂时用咨询表单替代
    showNotification('📈 ROI计算器正在开发中，请先填写咨询表单，我们的顾问会为您详细分析。', 'info');
    
    setTimeout(() => {
        openConsultation('咨询');
    }, 1500);
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        z-index: 1001;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    // 添加动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            transition: background 0.2s;
        }
        
        .notification-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // 自动消失
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// 导出函数供HTML调用
window.openConsultation = openConsultation;
window.closeConsultation = closeConsultation;
window.submitConsultation = submitConsultation;
window.signUpNow = signUpNow;
window.customSolution = customSolution;
window.calculateROI = calculateROI;
window.showNotification = showNotification;