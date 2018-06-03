import Vue from 'vue';
import Router from 'vue-router';
// import { store } from '../store/store';

// Custom Pages
import AppDashboard from '../pages/AppDashboard';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import ChannelList from '../pages/ChannelList';
import ResourceLibrary from '../pages/ResourceLibrary';
//import ResourceList from '../pages/ResourceList';
//import ResourceItem from '../pages/ResourceItem';
import QuestionPage from '../pages/QuestionPage';

// PAGES
import CSSPage from '../docs/CSSPage';
import ComponentsPage from '../docs/ComponentsPage';
import AdvancedPage from '../docs/AdvancedPage';

// FREE
//import HomePage from '../docs/HomePage';
import GridPage from '../docs/GridPage';
import BadgePage from '../docs/BadgePage';
import CardPage from '../docs/CardPage';
import ButtonPage from '../docs/ButtonPage';
import TablePage from '../docs/TablePage';
import DropdownPage from '../docs/DropdownPage';
import JumbotronPage from '../docs/JumbotronPage';
import CarouselPage from '../docs/CarouselPage';
import BreadcrumbPage from '../docs/BreadcrumbPage';
import FaPage from '../docs/FaPage';
import InputsPage from '../docs/InputsPage';
import LiveDemoPage from '../docs/LiveDemoPage';
import MediaPage from '../docs/MediaPage';
import ListGroupPage from '../docs/ListGroupPage';
import NavbarPage from '../docs/NavbarPage';
import NavigationPage from '../docs/NavigationPage';
import CollapsePage from '../docs/CollapsePage';
import PaginationPage from '../docs/PaginationPage';
import PanelPage from '../docs/PanelPage';
import ChartPage from '../docs/ChartPage';
import ProgressBarsPage from '../docs/ProgressBarsPage';
import TooltipPage from '../docs/TooltipPage';
import PopoverPage from '../docs/PopoverPage';
import EdgeHeaderPage from '../docs/EdgeHeaderPage';
import MasksPage from '../docs/MasksPage';
import HoverPage from '../docs/HoverPage';
import VideoCarouselPage from '../docs/VideoCarouselPage';
import ModalPage from '../docs/ModalPage';

// PRO
import CardProPage from '../docs/pro/CardProPage';
import DropdownProPage from '../docs/pro/DropdownProPage';
import DoubleNavigationPage from '../docs/pro/DoubleNavigationPage';
import ChartProPage from '../docs/pro/ChartProPage';
import ProgressBarsProPage from '../docs/pro/ProgressBarsProPage';
import TabsPage from '../docs/pro/TabsPage';
import SideNavPage from '../docs/pro/SideNavPage';
import ButtonProPage from '../docs/pro/ButtonProPage';
import AccordionPage from '../docs/pro/AccordionPage';
import ScrollSpyPage from '../docs/pro/ScrollSpyPage';
import SelectPage from '../docs/pro/SelectPage';
import InputsProPage from '../docs/pro/InputsPage';
import DatePickerPage from '../docs/pro/DatePickerPage';
import TimePickerPage from '../docs/pro/TimePickerPage';
import LightboxPage from '../docs/pro/LightboxPage';
import MultiCarouselPage from '../docs/pro/MultiCarouselPage';
import ThumbnailsCarouselPage from '../docs/pro/ThumbnailsCarouselPage';
import ScrollbarPage from '../docs/pro/ScrollbarPage';
import StickyPage from '../docs/pro/StickyPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppDashboard,
      // beforeEnter (to, from, next) {
      //   if (store.getters.isAuthenticated) {
      //     console.log('[ROUTER GUARD] beforeEnter -> AppDashboard: Valid idToken. ', store.getters.idToken);
      //     console.log('[FROM]: ', from);
      //     console.log('[TO]: ', to);
      //     return next();
      //   }
      //
      //   console.log('[ROUTER GUARD] beforeEnter -> AppDashboard: Bad idToken. ', store.getters.idToken);
      //   next('/login');
      // }
    },
    // CUSTOM PAGES
    {
      path: '/signup',
      name: 'Signup',
      component: SignupPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/game/channels',
      name: 'Channel',
      component: ChannelList
    },
    {
      path: '/library',
      name: 'Library',
      component: ResourceLibrary
    },
    {
      path: '/question/:id',
      name: 'Question',
      component: QuestionPage
    },
    
    // PAGES
    {
      path: '/css',
      name: 'CSSPage',
      component: CSSPage
    }, {
      path: '/components',
      name: 'ComponentsPage',
      component: ComponentsPage
    }, {
      path: '/advanced',
      name: 'AdvancedPage',
      component: AdvancedPage
    },

    // FREE
    {
      path: '/components/badge',
      name: 'BadgePage',
      component: BadgePage
    }, {
      path: '/components/grid',
      name: 'GridPage',
      component: GridPage
    }, {
      path: '/components/card',
      name: 'CardPage',
      component: CardPage
    }, {
      path: '/components/button',
      name: 'ButtonPage',
      component: ButtonPage
    }, {
      path: '/css/table',
      name: 'TablePage',
      component: TablePage
    }, {
      path: '/components/dropdown',
      name: 'DropdownPage',
      component: DropdownPage
    }, {
      path: '/css/jumbotron',
      name: 'JumbotronPage',
      component: JumbotronPage
    }, {
      path: '/advanced/carousel',
      name: 'CarouselPage',
      component: CarouselPage
    }, {
      path: '/components/breadcrumb',
      name: 'BreadcrumbPage',
      component: BreadcrumbPage
    }, {
      path: '/css/hover',
      name: 'HoverPagePage',
      component: HoverPage
    }, {
      path: '/css/icons',
      name: 'FaPage',
      component: FaPage
    }, {
      path: '/components/inputs',
      name: 'InputsPage',
      component: InputsPage
    }, {
      path: '/components/liveDemo',
      name: 'LiveDemoPage',
      component: LiveDemoPage
    }, {
      path: '/components/media',
      name: 'MediaPage',
      component: MediaPage
    }, {
      path: '/components/listgroup',
      name: 'ListGroupPage',
      component: ListGroupPage
    }, {
      path: '/components/navbar',
      name: 'NavbarPage',
      component: NavbarPage
    }, {
      path: '/components/navigation',
      name: 'NavigationPage',
      component: NavigationPage
    }, {
      path: '/advanced/collapse',
      name: 'CollapsePage',
      component: CollapsePage
    }, {
      path: '/components/pagination',
      name: 'PaginationPage',
      component: PaginationPage
    }, {
      path: '/components/panel',
      name: 'PanelPage',
      component: PanelPage
    }, {
      path: '/advanced/chart',
      name: 'ChartPage',
      component: ChartPage
    }, {
      path: '/components/progress-bars',
      name: 'ProgressBarsPage',
      component: ProgressBarsPage
    }, {
      path: '/advanced/tooltip',
      name: 'TooltipPage',
      component: TooltipPage
    }, {
      path: '/advanced/popover',
      name: 'PopoverPage',
      component: PopoverPage
    }, {
      path: '/components/edge-header',
      name: 'EdgeHeaderPage',
      component: EdgeHeaderPage
    }, {
      path: '/css/masks',
      name: 'MasksPage',
      component: MasksPage
    }, {
      path: '/advanced/videocarousel',
      name: 'VideoCarouselPage',
      component: VideoCarouselPage
    }, {
      path: '/advanced/modal',
      name: 'ModalPage',
      component: ModalPage
    },

    // PRO
    {
      path: '/components/pro/card',
      name: 'CardProPage',
      component: CardProPage
    }, {
      path: '/components/pro/dropdown',
      name: 'DropdownProPage',
      component: DropdownProPage
    }, {
      path: '/advanced/pro/double-navigation',
      name: 'DoubleNavigationPage',
      component: DoubleNavigationPage
    }, {
      path: '/advanced/pro/chart',
      name: 'ChartProPage',
      component: ChartProPage
    }, {
      path: '/components/pro/progress-bars-pro',
      name: 'ProgressBarsProPage',
      component: ProgressBarsProPage
    }, {
      path: '/components/pro/tabs',
      name: 'TabsPage',
      component: TabsPage
    }, {
      path: '/components/pro/button',
      name: 'ButtonProPage',
      component: ButtonProPage
    }, {
      path: '/advanced/pro/accordion',
      name: 'AccordionPage',
      component: AccordionPage
    }, {
      path: '/advanced/pro/scrollspy',
      name: 'ScrollSpyPage',
      component: ScrollSpyPage
    }, {
      path: '/advanced/pro/select',
      name: 'SelectPage',
      component: SelectPage
    }, {
      path: '/components/pro/inputs',
      name: 'InputsProPage',
      component: InputsProPage
    }, {
      path: '/advanced/pro/lightbox',
      name: 'LightboxPage',
      component: LightboxPage
    }, {
      path: '/advanced/pro/multicarousel',
      name: 'MultiCarouselPage',
      component: MultiCarouselPage
    }, {
      path: '/advanced/pro/thumbnailscarousel',
      name: 'ThumbnailsCarouselPage',
      component: ThumbnailsCarouselPage
    }, {
      path: '/advanced/pro/scrollbar',
      name: 'ScrollbarPage',
      component: ScrollbarPage
    }, {
      path: '/advanced/pro/sidenav',
      name: 'SideNavPage',
      component: SideNavPage
    }, {
      path: '/advanced/pro/sticky',
      name: 'Sticky',
      component: StickyPage
    }, {
      path: '/advanced/pro/datepicker',
      name: 'DatePickerPage',
      component: DatePickerPage
    }, {
      path: '/advanced/pro/timepicker',
      name: 'TimePickerPage',
      component: TimePickerPage
    }
  ]
});
