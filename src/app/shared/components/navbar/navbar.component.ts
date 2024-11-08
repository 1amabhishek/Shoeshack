import { Component, computed } from '@angular/core'
import { APP_PROPERTIES } from '../../../../properties'
import { CartService } from '../../services/cart.service'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public APP_PROPERTIES = APP_PROPERTIES
  public menuOptions = computed(() => {
    switch (this.authService.authUser()?.role) {
      case 'Admin':
        return [
          {
            label: 'Manage users',
            icon: 'account-group',
            route: 'admin/users'
          },
          {
            label: 'Manage products',
            icon: 'shoe-sneaker',
            route: 'admin/products'
          },
          {
            label: 'Manage purchases',
            icon: 'package-variant-closed-check',
            route: 'admin/purchases'
          },
          {
            label: 'My cards',
            icon: 'credit-card-multiple',
            route: 'cards'
          },
          {
            label: 'My purchases',
            icon: 'package-variant',
            route: 'purchases'
          },
          {
            label: 'Profile',
            icon: 'account',
            route: 'profile'
          }
        ]
      case 'User':
        return [
          {
            label: 'My cards',
            icon: 'credit-card-multiple',
            route: 'cards'
          },
          {
            label: 'My purchases',
            icon: 'package-variant',
            route: 'purchases'
          },
          {
            label: 'Profile',
            icon: 'account',
            route: 'profile'
          }
        ]
      default:
        return []
    }
  })

  public constructor(
    public readonly cartService: CartService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public logout(): void {
    this.authService.logout()
    this.router.navigateByUrl('/login')
  }
}
