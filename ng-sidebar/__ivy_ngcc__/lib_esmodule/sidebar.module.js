import * as ɵngcc0 from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarContainer } from './sidebar-container.component';
import { Sidebar } from './sidebar.component';
import { CloseSidebar } from './close.directive';
var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule_1 = SidebarModule;
    SidebarModule.forRoot = function () {
        return {
            ngModule: SidebarModule_1
        };
    };
    var SidebarModule_1;
SidebarModule.ɵfac = function SidebarModule_Factory(t) { return new (t || SidebarModule)(); };
SidebarModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: SidebarModule });
SidebarModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SidebarModule, [{
        type: NgModule,
        args: [{
                declarations: [SidebarContainer, Sidebar, CloseSidebar],
                imports: [CommonModule],
                exports: [SidebarContainer, Sidebar, CloseSidebar]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SidebarModule, { declarations: function () { return [SidebarContainer, Sidebar, CloseSidebar]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SidebarContainer, Sidebar, CloseSidebar]; } }); })();
    return SidebarModule;
}());
export { SidebarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VzIjpbInNpZGViYXIubW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OzttVUFPc0I7QUFDdEI7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTaWRlYmFyQ29udGFpbmVyIH0gZnJvbSAnLi9zaWRlYmFyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2xvc2VTaWRlYmFyIH0gZnJvbSAnLi9jbG9zZS5kaXJlY3RpdmUnO1xudmFyIFNpZGViYXJNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNpZGViYXJNb2R1bGUoKSB7XG4gICAgfVxuICAgIFNpZGViYXJNb2R1bGVfMSA9IFNpZGViYXJNb2R1bGU7XG4gICAgU2lkZWJhck1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFNpZGViYXJNb2R1bGVfMVxuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIFNpZGViYXJNb2R1bGVfMTtcbiAgICBTaWRlYmFyTW9kdWxlID0gU2lkZWJhck1vZHVsZV8xID0gX19kZWNvcmF0ZShbXG4gICAgICAgIE5nTW9kdWxlKHtcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1NpZGViYXJDb250YWluZXIsIFNpZGViYXIsIENsb3NlU2lkZWJhcl0sXG4gICAgICAgICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICAgICAgICAgIGV4cG9ydHM6IFtTaWRlYmFyQ29udGFpbmVyLCBTaWRlYmFyLCBDbG9zZVNpZGViYXJdXG4gICAgICAgIH0pXG4gICAgXSwgU2lkZWJhck1vZHVsZSk7XG4gICAgcmV0dXJuIFNpZGViYXJNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgU2lkZWJhck1vZHVsZSB9O1xuIl19