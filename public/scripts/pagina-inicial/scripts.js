        // Default configuration
        const defaultConfig = {
            site_title: 'Secretaria Municipal de Educação',
            hero_title: 'Educação de qualidade para todos os mossoroenses',
            hero_subtitle: 'Transformando vidas através do conhecimento. Acesse nossos serviços, acompanhe notícias e conheça nossas escolas.',
            news_section_title: 'Últimas Notícias',
            footer_address: 'Rua Pedro Álvares Cabral, 01\nCentro, Mossoró/RN\nCEP: 59600-010',
            footer_phone: '(84) 3315-4900',
            background_color: '#f8fafc',
            primary_color: '#1e3a5f',
            text_color: '#1e293b',
            accent_color: '#f59e0b',
            surface_color: '#ffffff'
        };

        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMobileMenu = document.getElementById('close-mobile-menu');
        const mobileNavContent = document.getElementById('mobile-nav-content');

        const menuData = [
            { title: 'Início', href: '#inicio' },
            {
                title: 'Institucional',
                items: [
                    { icon: 'fas fa-landmark', label: 'Sobre a Secretaria', href: '#sobre' },
                    { icon: 'fas fa-user', label: 'Secretário(a)', href: '#secretario' },
                    { icon: 'fas fa-chart-organization', label: 'Organograma', href: '#organograma' },
                    { icon: 'fas fa-scroll', label: 'Legislação', href: '#legislacao' },
                    { icon: 'fas fa-map-marker-alt', label: 'Contato e Localização', href: '#contato' }
                ]
            },
            {
                title: 'Ensino',
                items: [
                    { icon: 'fas fa-child', label: 'Educação Infantil', href: '#infantil' },
                    { icon: 'fas fa-book-open', label: 'Ensino Fundamental', href: '#fundamental' },
                    { icon: 'fas fa-users', label: 'EJA', href: '#eja' },
                    { icon: 'fas fa-heart', label: 'Educação Especial', href: '#especial' },
                    { icon: 'fas fa-star', label: 'Tempo Integral', href: '#integral' }
                ]
            },
            {
                title: 'Escolas',
                items: [
                    { icon: 'fas fa-list', label: 'Lista de Escolas', href: '#lista-escolas' },
                    { icon: 'fas fa-map', label: 'Mapa das Escolas', href: '#mapa' },
                    { icon: 'fas fa-baby', label: 'Creches', href: '#creches' },
                    { icon: 'fas fa-palette', label: 'CMEIs', href: '#cmeis' }
                ]
            },
            {
                title: 'Serviços',
                items: [
                    { icon: 'fas fa-pen-to-square', label: 'Matrícula Online', href: '#matricula' },
                    { icon: 'fas fa-bus', label: 'Transporte Escolar', href: '#transporte' },
                    { icon: 'fas fa-apple-whole', label: 'Alimentação Escolar', href: '#merenda' },
                    { icon: 'fas fa-shirt', label: 'Uniforme e Material', href: '#uniforme' },
                    { icon: 'fas fa-file-contract', label: 'Documentos', href: '#documentos' },
                    { icon: 'fas fa-bullhorn', label: 'Ouvidoria', href: '#ouvidoria' }
                ]
            },
            {
                title: 'Profissionais',
                items: [
                    { icon: 'fas fa-clipboard-list', label: 'Concursos e Seleções', href: '#concursos' },
                    { icon: 'fas fa-chalkboard-user', label: 'Formação Continuada', href: '#formacao' },
                    { icon: 'fas fa-desktop', label: 'Portal do Servidor', href: '#portal-servidor' },
                    { icon: 'fas fa-list-check', label: 'PCCR', href: '#pccr' }
                ]
            },
            {
                title: 'Transparência',
                items: [
                    { icon: 'fas fa-money-bill-wave', label: 'Licitações', href: '#licitacoes' },
                    { icon: 'fas fa-file-lines', label: 'Contratos', href: '#contratos' },
                    { icon: 'fas fa-chart-bar', label: 'Prestação de Contas', href: '#prestacao' },
                    { icon: 'fas fa-coins', label: 'FUNDEB', href: '#fundeb' },
                    { icon: 'fas fa-arrow-trend-up', label: 'Indicadores', href: '#indicadores' }
                ]
            }
        ];

        // Generate mobile menu
        function generateMobileMenu() {
            mobileNavContent.innerHTML = menuData.map((item, index) => {
                if (!item.items) {
                    return `<a href="${item.href}" class="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 rounded-lg"><i class="fas fa-home mr-2"></i>${item.title}</a>`;
                }
                return `
          <div class="border-b border-slate-100 pb-2 mb-2">
            <button onclick="toggleMobileAccordion(${index})" class="w-full flex items-center justify-between px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 rounded-lg">
              <span><i class="fas fa-chevron-down mr-2"></i>${item.title}</span>
              <i class="fas fa-chevron-down transform transition-transform" id="accordion-icon-${index}"></i>
            </button>
            <div class="mobile-accordion-content" id="accordion-content-${index}">
              <div class="pl-4 py-2 space-y-1">
                ${item.items.map(subItem => `
                  <a href="${subItem.href}" class="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm">
                    <i class="${subItem.icon}"></i>
                    ${subItem.label}
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        `;
            }).join('');
        }

        function toggleMobileAccordion(index) {
            const content = document.getElementById(`accordion-content-${index}`);
            const icon = document.getElementById(`accordion-icon-${index}`);
            content.classList.toggle('active');
            if (icon) {
                icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
            }
        }

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });

        generateMobileMenu();

        // Element SDK integration
        async function onConfigChange(config) {
            const siteTitle = document.getElementById('site-title');
            const heroTitle = document.getElementById('hero-title');
            const heroSubtitle = document.getElementById('hero-subtitle');
            const newsSectionTitle = document.getElementById('news-section-title');
            const footerAddress = document.getElementById('footer-address');
            const footerPhoneDisplay = document.getElementById('footer-phone-display');
            const headerPhone = document.getElementById('header-phone');

            if (siteTitle) siteTitle.textContent = config.site_title || defaultConfig.site_title;
            if (heroTitle) heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
            if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
            if (newsSectionTitle) newsSectionTitle.textContent = config.news_section_title || defaultConfig.news_section_title;
            if (footerAddress) footerAddress.innerHTML = (config.footer_address || defaultConfig.footer_address).replace(/\n/g, '<br>');
            if (footerPhoneDisplay) footerPhoneDisplay.textContent = config.footer_phone || defaultConfig.footer_phone;
            if (headerPhone) headerPhone.textContent = config.footer_phone || defaultConfig.footer_phone;

            // Apply colors
            const bgColor = config.background_color || defaultConfig.background_color;
            const primaryColor = config.primary_color || defaultConfig.primary_color;
            const textColor = config.text_color || defaultConfig.text_color;
            const accentColor = config.accent_color || defaultConfig.accent_color;
            const surfaceColor = config.surface_color || defaultConfig.surface_color;

            document.body.style.backgroundColor = bgColor;

            // Update hero gradient
            const hero = document.getElementById('hero');
            if (hero) {
                hero.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${adjustColor(primaryColor, 20)} 50%, ${adjustColor(primaryColor, 40)} 100%)`;
            }

            // Update stats section
            const stats = document.getElementById('stats');
            if (stats) {
                stats.style.background = `linear-gradient(to right, ${primaryColor}, ${adjustColor(primaryColor, 15)})`;
            }
        }

        // Helper function to adjust color brightness
        function adjustColor(hex, percent) {
            const num = parseInt(hex.replace('#', ''), 16);
            const amt = Math.round(2.55 * percent);
            const R = Math.min(255, (num >> 16) + amt);
            const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
            const B = Math.min(255, (num & 0x0000FF) + amt);
            return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => { config.background_color = value; window.elementSdk.setConfig({ background_color: value }); }
                    },
                    {
                        get: () => config.surface_color || defaultConfig.surface_color,
                        set: (value) => { config.surface_color = value; window.elementSdk.setConfig({ surface_color: value }); }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => { config.text_color = value; window.elementSdk.setConfig({ text_color: value }); }
                    },
                    {
                        get: () => config.primary_color || defaultConfig.primary_color,
                        set: (value) => { config.primary_color = value; window.elementSdk.setConfig({ primary_color: value }); }
                    },
                    {
                        get: () => config.accent_color || defaultConfig.accent_color,
                        set: (value) => { config.accent_color = value; window.elementSdk.setConfig({ accent_color: value }); }
                    }
                ],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ['site_title', config.site_title || defaultConfig.site_title],
                ['hero_title', config.hero_title || defaultConfig.hero_title],
                ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
                ['news_section_title', config.news_section_title || defaultConfig.news_section_title],
                ['footer_address', config.footer_address || defaultConfig.footer_address],
                ['footer_phone', config.footer_phone || defaultConfig.footer_phone]
            ]);
        }

        // Initialize SDK
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }

    (function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9c91bff555f227f1',t:'MTc3MDI4NzYwOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })()