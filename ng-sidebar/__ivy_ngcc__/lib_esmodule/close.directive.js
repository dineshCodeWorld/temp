import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './sidebar.component';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive } from '@angular/core';
import { Sidebar } from './sidebar.component';
var CloseSidebar = (function () {
    function CloseSidebar(_sidebar) {
        this._sidebar = _sidebar;
    }
    CloseSidebar.prototype._onClick = function () {
        if (this._sidebar) {
            this._sidebar.close();
        }
    };
    CloseSidebar = __decorate([ __metadata("design:paramtypes", [Sidebar])
    ], CloseSidebar);
CloseSidebar.ɵfac = function CloseSidebar_Factory(t) { return new (t || CloseSidebar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Sidebar)); };
CloseSidebar.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: CloseSidebar, selectors: [["", "closeSidebar", ""]], hostBindings: function CloseSidebar_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CloseSidebar_click_HostBindingHandler() { return ctx._onClick(); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CloseSidebar, [{
        type: Directive,
        args: [{
                selector: '[closeSidebar]',
                host: {
                    '(click)': '_onClick()'
                }
            }]
    }], function () { return [{ type: ɵngcc1.Sidebar }]; }, null); })();
    return CloseSidebar;
}());
export { CloseSidebar };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJjbG9zZS5kaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBT087QUFDUDs7Ozs7Ozs7Ozs7Ozt3RUFBcUI7QUFDckI7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5jb21wb25lbnQnO1xudmFyIENsb3NlU2lkZWJhciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2xvc2VTaWRlYmFyKF9zaWRlYmFyKSB7XG4gICAgICAgIHRoaXMuX3NpZGViYXIgPSBfc2lkZWJhcjtcbiAgICB9XG4gICAgQ2xvc2VTaWRlYmFyLnByb3RvdHlwZS5fb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NpZGViYXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpZGViYXIuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2xvc2VTaWRlYmFyID0gX19kZWNvcmF0ZShbXG4gICAgICAgIERpcmVjdGl2ZSh7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tjbG9zZVNpZGViYXJdJyxcbiAgICAgICAgICAgIGhvc3Q6IHtcbiAgICAgICAgICAgICAgICAnKGNsaWNrKSc6ICdfb25DbGljaygpJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTaWRlYmFyXSlcbiAgICBdLCBDbG9zZVNpZGViYXIpO1xuICAgIHJldHVybiBDbG9zZVNpZGViYXI7XG59KCkpO1xuZXhwb3J0IHsgQ2xvc2VTaWRlYmFyIH07XG4iXX0=